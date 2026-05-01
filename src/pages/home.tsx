import { SectionHero } from '@/pages/-home/section-hero'
import { BaseLayout } from '@/pages/-layout'

export default function Page() {
  return (
    <BaseLayout title='Your Inbox on the Edge - Flarebox'>
      <SectionHero image={{src: '/screenshot01.png', alt:'Hero Image'}} />
    </BaseLayout>
  )
}
