<template>
  <div>
    <b-breadcrumb :items="routes" />
    <b-row align-h="end">
      <!-- <b-col cols="4">
        <b-form-input placeholder="Search..." />
      </b-col> -->
      <b-col lg="8">
        <b-row no-gutters align-h="end">
          <b-col cols="auto" sm="8">
            <b-pagination
              v-model="pagination.page"
              :per-page="pagination.perPage"
              :total-rows="pagination.total"
              aria-controls="users table"
              class="pagination"
              hide-goto-end-buttons
              next-text="next"
              prev-text="prev"
              @input="getUsers"
            />
          </b-col>
          <b-col cols="auto" sm="4" xl="3">
            <b-form-group label="Per page" label-cols-sm="5" label-class="per-page-label">
              <b-form-select
                v-model="pagination.perPage"
                :options="pagination.perPageVariants"
                @change="getUsers"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <div class="overflow-auto">
      <b-table
        id="users-table"
        :busy="loading"
        :fields="columns"
        :items="users"
        class="table"
        small
      >
        <template v-slot:table-busy>
          <div class="text-center text-danger py-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong class="ml-2">Loading...</strong>
          </div>
        </template>

        <template v-slot:cell(email)="{ value }">
          <a :href="`mailto:${value}`">
            {{ value }}
          </a>
        </template>

        <template v-slot:cell(actions)="{ item }">
          <b-button :to="{ name: 'user', params: { user: item.id } }" variant="primary">
            <b-icon-eye />
          </b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IBreadcrumb, IPagination } from '@/types/common';
import { BIcon, BIconEye } from 'bootstrap-vue';
import IUser from '@/types/user';

@Component({
  components: {
    BIcon,
    BIconEye,
  },
})
export default class Index extends Vue {
  // eslint-disable-next-line
  columns: any[] = [
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'first_name',
      label: 'First Name',
    },
    {
      key: 'last_name',
      label: 'Last Name',
    },
    {
      key: 'actions',
      label: 'Actions',
    },
  ];

  loading = true;

  routes: IBreadcrumb[] = [
    {
      text: 'Home',
      to: { name: 'index' },
    },
  ];

  pagination: IPagination = {
    page: 1,
    perPage: 10,
    perPageVariants: [
      { value: 5, text: '5' },
      { value: 10, text: '10' },
      { value: 15, text: '15' },
      { value: 25, text: '25' },
      { value: 50, text: '50' },
      { value: 100, text: '100' },
    ],
    total: 0,
  };

  // eslint-disable-next-line
  users: IUser[] = [];

  getUsers() {
    this.loading = true;

    this.axios({
      method: 'get',
      url: `/users?page=${this.pagination.page}&per_page=${this.pagination.perPage}`,
    })
      .then(({ data }) => {
        this.users = (data && data.data) || [];
        this.pagination.total = data && data.total;
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 200);
      });
  }

  mounted() {
    this.getUsers();
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  justify-content: center;
  margin: 0 1em 0 0;

  @media screen and (min-width: 576px) {
    justify-content: flex-end;
  }
}

.table {
  min-width: 720px;

  /deep/ td {
    vertical-align: middle;
  }
}

/deep/ .per-page-label {
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }
}
</style>
