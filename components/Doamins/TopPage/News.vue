<template>
  <div class='relative font-noto news'>
    <div class='flex flex-col lg:flex-row'>
      <div class='news-flex-first font-mont mt-20 lg:mt-0'>
        <p class='font-bold text-4xl lg:text-6xl color-blue-green'>
          News
        </p>
        <p class='font-bold  text-7xl lg:text-9xl -ml-8 lg:-ml-2 -mt-20 lg:-mt-12 mb-12 lg:mb-0 opacity-40 text-shadow'>
          News
        </p>
      </div>
      <div class='news-flex-second'>
        <div class='news-list'>
          <div v-for='(item, index) in news' :key='index' class='flex flex-col lg:flex-row'>
            <div class='news-date'>
              {{ item.pubDate }}
            </div>
            <div class='lg:pl-4'>
              <outer-link :label='item.title' :to='item.link' />
            </div>
          </div>
        </div>
        <div class='mt-8 lg:mt-5 more-news text-right color-blue-green'>
          <outer-link
            :label="$t('pages.index.moreNews')"
            to='https://pyconjp.blogspot.com/search/label/pyconjp2021'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OuterLink from '~/components/OuterLink'

export default {
  components: { OuterLink },
  props: {
    news: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.news {
  margin: 3rem 2rem 5rem;
  @media (min-width: 1024px) {
    margin: 7.125rem 5rem 11.25rem;
  }
}

.news-flex-first {
  flex: 1 1 0;
  @media (min-width: 1024px) {
    flex: 2 1 0;
  }
}

.news-flex-second {
  flex: 1 1 0;
  @media (min-width: 1024px) {
    flex: 3 1 0;
  }
}

.news-list {
  @media (min-width: 1024px) {
    border-left: 1px solid #dddddd;
    padding-left: 40px;
    padding-right: 40px;
  }

  & > div {
    margin-bottom: 0.5rem;

    @media (min-width: 1024px) {
      margin-bottom: 10px;
    }

    :last-child {
      margin-bottom: 0;
    }
  }
}

.color-blue-green {
  color: #1097aa;
}

.news-date {
  color: #666666;
}

.more-news {
  text-decoration: underline;

  &::after {
    content: '→';
  }
}
</style>
