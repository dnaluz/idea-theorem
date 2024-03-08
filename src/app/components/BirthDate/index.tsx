'use client';

/** Components */
import Dropdown from '@/app/components/CustomSelect';
import { useEffect, useState } from 'react';

export type BirthDateProps = {
  label: string;
  className: string;
};

const MONTHS = [
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

const BirthDate = ({ label, className }: BirthDateProps) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>();
  const [day, setDay] = useState<number>();

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

  return (
    <div className={`${className ?? ''}`}>
      <div className="text-base font-bold leading-6 tracking-0.15 text-333333 mb-2.5">
        {label}
      </div>
      <div className="flex flex-row justify-between">
        <Dropdown
          id="day"
          name="day"
          label="Day"
          options={[...getDaysInMonth(year, month)]}
          required
          onChange={(value: number | string) => setDay(Number(value))}
        />
        <Dropdown
          id="month"
          name="month"
          label="Month"
          options={MONTHS}
          required
          onChange={(value: number | string) => setMonth(Number(value))}
        />
        <Dropdown
          id="year"
          name="year"
          label="Year"
          options={[...getYearRange(1972)]}
          required
          onChange={(value: number | string) => setYear(Number(value))}
        />
      </div>
    </div>
  );
};

export default BirthDate;
