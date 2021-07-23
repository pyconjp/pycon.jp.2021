<template>
  <div class='text-white font-noto'>
    <div class='footer-upper-background'>
      <div class='footer-upper'>
        <img src='~/assets/images/2021-logo.png' alt='2021-logo'/>
        <div class='flex footer-menu flex-col lg:flex-row'>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.abstract') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.codeOfConduct') }}</p>
            <p class='mb-0 text-sm'>{{ $t('common.aboutPyConJP')}}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.eventList') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.timeTable') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.specialBooth') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.tutorial') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.sprint') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.handsOn') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.youtubeLiveList') }}</p>
            <p class='mb-0 text-sm'>{{ $t('common.onlineParty') }}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.news') }}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.sponsor') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.sponsorList') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.sponsorApplication') }}</p>
            <p class='mb-4 text-sm'>{{ $t('common.sponsorApplicationForm') }}</p>
            <p class='mb-0 text-sm'>{{ $t('common.sponsorPlanning') }}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.staffList') }}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.access') }}</p>
          </div>
          <div class='flex-1'>
            <p class='mb-5 text-base'>{{ $t('common.faq') }}</p>
          </div>
        </div>
        <div class='font-source'>
          <p>Follow US! twitter</p>
        </div>
        <div>
          <p>お問い合わせ：pyconjp@pycon.jp</p>
          <p>事前にFAQを。。。。。</p>
        </div>
        <div>過去のPyCon JPのサイト一覧</div>
      </div>
    </div>
    <div class='footer-lower-background'>
      <img src='~/assets/images/association-logo.png' alt='association-logo'/>
      <p>主催：一般社団法人PyCon JP Association</p>
      <p>PyCon JP 2021 is a production of the PyCon JP Association</p>
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
}

.footer-lower-background {
  background: #3d5154;
}
</style>
