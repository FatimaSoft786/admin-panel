"use client";
import { useTranslations } from "next-intl";
import DashboardAdmin from "./admin/dashboard/@dashboard/dashboardAdmin";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Index() {
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    router.push(`/${params.locale}/auth/admin/signin`);
  }, []);
  return <></>;
}
