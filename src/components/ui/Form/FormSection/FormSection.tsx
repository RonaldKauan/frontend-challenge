interface FormSectionProps {
  section: string;
}

const FormSection: React.FC<FormSectionProps> = ({ section }) => {
  return (
    <div className="flex items-center gap-1 mb-5">
      <h2 className="text-[14px] text-[#0B2B25] font-bold whitespace-nowrap">
        {section}
      </h2>
      <hr className="h-px w-full bg-[#707070]" />
    </div>
  );
};

export default FormSection;
