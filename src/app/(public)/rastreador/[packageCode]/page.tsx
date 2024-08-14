'use client';

import { useParams } from 'next/navigation';

import { PackageDetailView } from '@/app/(public)/rastreador/[packageCode]/package-detail.view';
import { Params } from '@/app/(public)/rastreador/[packageCode]/params.type';

export default function PackageDetailPage() {
  const params = useParams<Params>();
  return <PackageDetailView packageCode={params.packageCode} />;
}
