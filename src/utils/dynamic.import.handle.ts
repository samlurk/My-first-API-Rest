import { readdir } from 'fs/promises';
/**
 * Remove .file extensions
 *
 * @param   {string[]}  fileName
 *
 * @return  {string[]}
 */

const cleanFileName = (fileName: string[]): string[] => {
  return fileName.map((file) => file.split('.').shift()).filter((file) => file !== 'index') as string[];
};

/**
 * Reads the directory asynchronously and issues a response
 *
 * @param   {string}   path
 *
 * @return  {Promise<string>[]}
 */

const readDir = async (path: string): Promise<string[] | string | undefined> => {
  try {
    const result = cleanFileName(await readdir(path));
    return result;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
  return undefined;
};

export { readDir };
