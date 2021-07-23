<template>
  <div class='text-white font-noto'>
    <div class='footer-upper-background'>
      <div class='footer-upper'>
        <img src='~/assets/images/2021-logo.png' alt='2021-logo' />
        <div class='flex footer-menu flex-col lg:flex-row'>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.abstract') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.codeOfConduct') }}</p>
            <p class='lg:mb-0 mb-8 text-sm'>{{ $t('common.aboutPyConJP') }}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.eventList') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.timeTable') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.specialBooth') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.tutorial') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.sprint') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.handsOn') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.youtubeLiveList') }}</p>
            <p class='lg:mb-0 mb-8 text-sm'>{{ $t('common.onlineParty') }}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.news') }}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.sponsor') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.sponsorList') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.sponsorApplication') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.sponsorApplicationForm') }}</p>
            <p class='lg:mb-0 mb-8 text-sm'>{{ $t('common.sponsorPlanning') }}</p>
          </div>
          <div class='flex-1'>
            <p class='lg:mb-0 mb-8 text-base'>{{ $t('common.staffList') }}</p>
          </div>
          <div class='flex-1'>
            <p class='lg:mb-0 mb-8 text-base'>{{ $t('common.access') }}</p>
          </div>
          <div class='flex-1'>
            <p class='lg:mb-0 mb-8 text-base'>{{ $t('common.faq') }}</p>
          </div>
        </div>
        <div class='font-source mb-7'>
          <span class='mr-2'>Follow US! twitter</span> <span><a href='https://twitter.com/pyconjapan' target='_blank'>@pyconjapan<img class='ml-2 inline h-4' src='~/assets/images/twitter.png' alt='twitter' /></a></span>
        </div>
        <div class='flex lg:items-end flex-col lg:flex-row'>
          <div class='flex-1 text-sm mb-8 lg:mb-0'>
            <p>お問い合わせ：<a href='mailto:pyconjp@pycon.jp'>pyconjp@pycon.jp</a></p>
            <p>{{ $t('pages.index.contactFooterDescription')[0] }}</p>
            <p>{{ $t('pages.index.contactFooterDescription')[1] }}</p>
            <p>{{ $t('pages.index.contactFooterDescription')[2] }}</p>
          </div>
          <div class='flex-1 previous-pages lg:text-right'>
            {{ $t('pages.index.pastPyConJPSites') }}
          </div>
        </div>
      </div>
    </div>
    <div class='footer-lower-background'>
      <div class='footer-lower flex lg:py-10 pt-6 pb-3 flex-col lg:flex-row lg:items-end'>
        <div class='flex-auto lg:mb-0 mb-2'>
          <img class='lg:mr-0 lg:ml-auto mx-auto' src='~/assets/images/association-logo.png' alt='association-logo' />
        </div>
        <div class='flex-auto'>
          <p>主催：一般社団法人PyCon JP Association</p>
          <p>PyCon JP 2021 is a production of the PyCon JP Association</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.footer-upper-background {
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
}

.footer-upper {
  padding: 40px 10%;

  @media (min-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

.footer-menu {
  padding-top: 60px;
  padding-bottom: 40px;
  margin-bottom: 40px;

  border-bottom: solid;
  border-bottom-color: white;

  & > div > p:not(:first-child)::before {
    display: inline-block;
    content: "";
    border-top: .1rem solid;
    width: 1rem;
    margin-right: 0.5rem;
    transform: translateY(-0.25rem);
  }
}

.footer-lower {
  padding-right: 10%;
  padding-left: 10%;

  @media (min-width: 1024px) {
    padding-right: 30%;
    padding-left: 30%;
  }
}

.footer-lower-background {
  background: #3d5154;
}

.previous-pages {
  text-decoration: underline;

  &::after {
    content: "→";
  }
}
</style>
