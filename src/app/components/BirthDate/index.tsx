'use client';
import { useEffect, useState, forwardRef } from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormSetValue,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetError,
} from 'react-hook-form';

/** Constants */
import { INVALID_BIRTHDATE } from '@/app/constants';

/** Components */
import CustomSelect from '@/app/components/CustomSelect';
import ErrorMessage from '@/app/components/ErrorMessage';

export type BirthDateProps = {
  label: string;
  className: string;
  register: UseFormRegister<FieldValues>;
  validationSchema?: {
    required?: string | boolean;
    validate?: (value: string) => string | undefined;
  };
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  setError: UseFormSetError<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
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

const BirthDate = forwardRef(function (props: BirthDateProps, ref: any) {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(1);
  const [day, setDay] = useState<number>(1);

  const { dayRef, monthRef, yearRef } = ref;

  const {
    label,
    className,
    register,
    errors,
    setValue,
    setError,
    clearErrors,
  } = props;
  const getDaysInMonth = (
    year: number | undefined,
    month: number | undefined
  ) => {
    const daysInMonth: { label: string; value: number }[] = [];

    if (year && month) {
      const numberOfDaysInMonth = new Date(year, month, 0).getDate();
      let startDay = 1;

      while (startDay <= numberOfDaysInMonth) {
        daysInMonth.push({ label: startDay.toString(), value: startDay });
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
      years.push({ label: startYear.toString(), value: startYear });
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
      setError('dob', { type: 'custom', message: INVALID_BIRTHDATE });
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
          ref={dayRef}
          register={register}
          errors={errors}
          value={day}
          onChange={(value: number | string) => {
            const day = Number(value);
            if (day > 31 || day < 1) {
              setError('day', { type: 'custom', message: 'Invalid day' });
            } else {
              setValue('day', Number(value));
              setDay(Number(value));
            }
          }}
          className="w-32% desktop:w-30%"
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
            const month = Number(value);

            if (month > 12 || month < 1) {
              setError('day', { type: 'custom', message: 'Invalid month' });
            } else {
              setMonth(Number(value));
              setValue('month', Number(value));
            }
          }}
          className="w-32% desktop:w-30%"
          ref={monthRef}
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
            const year = Number(value);
            const currentYear = new Date().getFullYear();

            if (year > currentYear) {
              setError('year', { type: 'custom', message: 'Invalid year' });
            } else {
              setYear(Number(value));
              setValue('year', Number(value));
            }
          }}
          className="w-32% desktop:w-30%"
          ref={yearRef}
        />
      </div>
      {errors?.dob && <ErrorMessage error={INVALID_BIRTHDATE} />}
    </div>
  );
});

export default BirthDate;
