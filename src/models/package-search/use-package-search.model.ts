import {
  packageSearchObjectSchema,
  PackageSearchSchema,
} from '@/models/package-search/package-search.model';

export function usePackageSearchModel() {
  function isObjectValid(schemaData: PackageSearchSchema): boolean {
    const objectParsed = packageSearchObjectSchema.safeParse(schemaData);
    return objectParsed.success;
  }

  return {
    isObjectValid,
  };
}
