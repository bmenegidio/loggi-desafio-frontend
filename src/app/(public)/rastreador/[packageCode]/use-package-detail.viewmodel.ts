import { usePackageSearchModel } from '@/models/package-search/use-package-search.model';

export function usePackageDetailViewModel() {
  const { isObjectValid } = usePackageSearchModel();

  function sanitizePackageCode(packageCode: string) {
    return packageCode?.replace(/[^a-zA-Z0-9]/g, '');
  }

  return {
    sanitizePackageCode,
    isPackageCodeValid: isObjectValid,
  };
}
