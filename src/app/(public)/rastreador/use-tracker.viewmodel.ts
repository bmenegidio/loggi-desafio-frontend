import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import {
  packageSearchObjectSchema,
  PackageSearchSchema,
} from '@/models/package-search/package-search.model';

export function useTrackerViewModel() {
  const router = useRouter();

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
    router.push(`/rastreador/${formData.packageCode}`);
  }

  return {
    navigateToPackageSearch,
    handleSubmit,
    control,
    errors,
  };
}
