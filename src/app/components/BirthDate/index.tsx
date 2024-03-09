'use client';
import { useEffect, useState } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

/** Components */
import CustomSelect from '@/app/components/CustomSelect';

export type BirthDateProps = {
  label: string;
  className: string;
  register: UseFormRegister<FieldValues>;
  validationSchema?: any;
  control: any;
  errors: any;
  setValue: any;
  setError: any;
  clearErrors: any;
};

export const MONTHS = [
  { label: 'Jan', value: 1 },
  { label: 'Feb', value: 2 },
  { label: 'Mar', value: 3 },
  { label: 'Apr', value: 4 },
  { label: 'May', value: 5 },
  { label: 'Jun', value: 6 },
  { label: 'Jul', value: 7 },
  { label: 'Aug', value: 8 },
  { label: 'Sep', value: 9 },
  { label: 'Oct', value: 10 },
  { label: 'Nov', value: 11 },
  { label: 'Dec', value: 12 },
];

const BirthDate = ({
  label,
  className,
  register,
  errors,
  setValue,
  setError,
  clearErrors,
}: BirthDateProps) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(1);
  const [day, setDay] = useState<number>(1);

  const getDaysInMonth = (
    year: number | undefined,
    month: number | undefined
  ) => {
    const daysInMonth: { label: string; value: number }[] = [];

    if (year && month) {
      const numberOfDaysInMonth = new Date(year, month, 0).getDate();
      let startDay = 1;

      while (startDay <= numberOfDaysInMonth) {
        daysInMonth.push({ label: `${startDay}`, value: startDay });
        startDay++;
      }
    }

    return daysInMonth;
  };

  const getYearRange = (
    startYear: number
  ): { label: string; value: number }[] => {
    const currentYear = new Date().getFullYear();
    const years: { label: string; value: number }[] = [];

    while (startYear <= currentYear) {
      years.push({ label: `${startYear}`, value: startYear });
      startYear++;
    }

    return years.reverse();
  };

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate();

    if (
      Number(year) === currentYear &&
      Number(month) === currentMonth &&
      Number(day) >= currentDay
    ) {
      setError('dob', { type: 'custom', message: 'Invalid DOB' });
    } else {
      clearErrors(['year', 'month', 'day', 'dob']);
    }
  }, [year, month, day, setError]);

  return (
    <div className={`${className ?? ''}`}>
      <div className="text-base font-bold leading-6 tracking-0.15 text-333333 mb-2.5">
        {label}
      </div>
      <div className="flex flex-row justify-between">
        <CustomSelect
          id="day"
          name="day"
          label="Day"
          options={[...getDaysInMonth(year, month)]}
          required
          register={register}
          errors={errors}
          value={day}
          onChange={(value: number | string) => {
            setValue('day', Number(value));
            setDay(Number(value));
          }}
        />
        <CustomSelect
          id="month"
          name="month"
          label="Month"
          options={MONTHS}
          required
          register={register}
          errors={errors}
          value={month}
          onChange={(value: number | string) => {
            setMonth(Number(value));
            setValue('month', Number(value));
          }}
        />
        <CustomSelect
          id="year"
          name="year"
          label="Year"
          options={[...getYearRange(1972)]}
          required
          register={register}
          errors={errors}
          value={year}
          onChange={(value: number | string) => {
            setYear(Number(value));
            setValue('year', Number(value));
          }}
        />
      </div>
      {errors?.dob && (
        <div className="text-CF4055 text-xs font-normal">
          Birthdate must be in the past
        </div>
      )}
    </div>
  );
};

export default BirthDate;
