import { useTranslations } from "next-intl";

export default function PatientsAdmin() {
  const t = useTranslations('Admin')
  return (
    <div className="flex flex-col py-6 h-auto gap-4 ">
      <h1 className="font-bold text-3xl max-md:text-2xl mt-4 mb-2 px-4">
        {t('Patient')}
      </h1>
    </div>
  );
}
