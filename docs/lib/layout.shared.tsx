import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, gitConfig } from './shared';
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
           <>
          <Image src="/deltaui-logo.svg" alt={appName} width={24} height={24} />
          <span className="font-semibold text-lg">{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
