<template>

<div class="h-100 bg-secondary text-white">
    <div class="container py-7">
        <div class="row g-7">
            <div class="col-lg-3">
                <ul class="sticky-top nav flex-lg-column">
                    <li class="nav-item">
                        <RouterLink
                            to="/member/order" class="nav-link py-md-4"
                            :class="{ 'link-active': $route.path === '/member/order' }">
                            訂單查詢
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink
                            to="/member/collection" class="nav-link py-md-4"
                            :class="{ 'link-active': $route.path === '/member/collection' }">
                            我的收藏
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="flex-grow-1 col-lg-7">
                <RouterView />
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

@import '@/assets/_variables.scss';

.nav-item {

  flex-grow: 1;

  overflow: hidden;

  &:first-child { border-radius: .25rem .25rem 0 0; }

  &:last-child { border-radius: 0 0 .25rem .25rem; }

}

.nav-link {

  text-align: center;
  background-color: $gray;
  color: $primary;

  border: 1px solid $gray;
  margin: 0 -1px -1px 0;

  &.link-active, &:hover {

    background-color: $primary;
    color: $gray;
    font-weight: bold;

    border-color: $primary;

  }

}

@media (max-width: 991px) {

  .nav-item {

    &:first-child { border-radius: .25rem 0 0 .25rem; }

    &:last-child { border-radius: 0 .25rem .25rem 0; }

  }

}

</style>
