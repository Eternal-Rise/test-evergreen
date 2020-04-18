<template>
  <div>
    <b-breadcrumb :items="routes" />

    <div v-if="loading" class="text-center text-danger py-2">
      <b-spinner />
    </div>

    <b-card v-else-if="!loading && !error" no-body>
      <b-row no-gutters>
        <b-col cols="12" sm="3" md="2" class=" mr-2">
          <b-card-img :src="user && user.avatar" />
        </b-col>
        <b-col>
          <b-card-body :title="fullName">
            <a :href="`mailto:${user && user.email}`">
              {{ user && user.email }}
            </a>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <b-alert :show="error" variant="danger">
      Not found
    </b-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IBreadcrumb } from '@/types/common';
import IUser from '@/types/user';

@Component({
  name: 'user',
})
export default class User extends Vue {
  user!: IUser;

  error = false;

  loading = true;

  get routes(): IBreadcrumb[] {
    return [
      {
        text: 'Home',
        to: { name: 'index' },
      },
      {
        text: 'User',
        to: { name: 'user', params: { user: this.id } },
      },
    ];
  }

  get fullName(): string {
    return this.user && `${this.user.first_name} ${this.user.last_name}`;
  }

  get id(): string {
    return this.$route.params.user || '';
  }

  mounted() {
    this.axios({
      method: 'get',
      url: `/users/${this.id}`,
    })
      .then(({ data }) => {
        this.user = data.data;

        this.routes[1].text = this.user.first_name;
      })
      .catch(() => {
        setTimeout(() => {
          this.error = true;
        }, 200);
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 200);
      });
  }
}
</script>

<style lang="scss" scoped></style>
