import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  packageSearchObjectSchema,
  PackageSearchSchema,
} from '@/models/package-search/package-search.model';

export function useTrackerViewModel() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PackageSearchSchema>({
    resolver: zodResolver(packageSearchObjectSchema),
    defaultValues: {
      packageCode: '',
    },
  });

  function navigateToPackageSearch(formData: PackageSearchSchema) {
    console.log(`navigateToPackageSearch: ${formData.packageCode}`);
  }

  return {
    navigateToPackageSearch,
    handleSubmit,
    control,
    errors,
  };
}
