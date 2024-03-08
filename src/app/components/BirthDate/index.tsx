/** Components */
import Select from '@/app/components/Select';

export type BirthDateProps = {
  label: string;
  className: string;
};

const MONTHS = [
  { label: '', value: '' },
  { label: 'Jan', value: 'Jan' },
  { label: 'Feb', value: 'Feb' },
  { label: 'Mar', value: 'Mar' },
  { label: 'Apr', value: 'Apr' },
  { label: 'May', value: 'May' },
  { label: 'Jun', value: 'Jun' },
  { label: 'Jul', value: 'Jul' },
  { label: 'Aug', value: 'Aug' },
  { label: 'Sep', value: 'Sep' },
  { label: 'Oct', value: 'Oct' },
  { label: 'Nov', value: 'Nov' },
  { label: 'Dec', value: 'Dec' },
];

const BirthDate = ({ label, className }: BirthDateProps) => {
  return (
    <div className={`${className ?? ''}`}>
      <div className="text-base font-bold leading-6 tracking-0.15 text-333333 mb-2.5">
        {label}
      </div>
      <div className="flex flex-row justify-between">
        <Select id="day" name="day" label="Day" options={[]} required />
        <Select
          id="month"
          name="month"
          label="Month"
          options={MONTHS}
          required
        />
        <Select id="year" name="year" label="Year" options={[]} required />
      </div>
    </div>
  );
};

export default BirthDate;
