import { Typography } from '@mui/material';

import { InvalidPackageCode } from '@/app/(public)/rastreador/[packageCode]/_components/invalid-package-code/InvalidPackageCode';
import { Params } from '@/app/(public)/rastreador/[packageCode]/params.type';
import { usePackageDetailViewModel } from '@/app/(public)/rastreador/[packageCode]/use-package-detail.viewmodel';

export function PackageDetailView({ packageCode }: Params) {
  const { sanitizePackageCode, isPackageCodeValid } = usePackageDetailViewModel();
  const sanitizedPackageCode = sanitizePackageCode(packageCode);

  const isInvalid = !isPackageCodeValid({ packageCode: sanitizedPackageCode });
  if (isInvalid) {
    return <InvalidPackageCode packageCode={sanitizedPackageCode} />;
  }

  return <Typography>View!</Typography>;
}
