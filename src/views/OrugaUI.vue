<template>
  <section>
    <o-steps v-model="currentStep" stepContentClass="o-demo-form">
      <o-step-item step="1" label="Profile">
        <h2 class="o-demo__title">Fill your profile information</h2>
          <o-field :message="messages.name" :variant="messages.name ? 'danger' : ''">
            <o-dropdown aria-role="list" v-model="currentMenu">
              <o-button
                variant="primary"
                #trigger="{ active }"
                :icon-right="active ? 'caret-up' : 'caret-down'">

                <span>{{ currentMenu.text }}</span>
              </o-button>

              <o-dropdown-item
                v-for="(menu, index) in menus"
                :key="index"
                :value="menu"
                aria-role="listitem"
              >
                <span>{{ menu.text }}</span>
              </o-dropdown-item>
            </o-dropdown>
            <o-input
              id="name"
              type="text"
              placeholder="Name"
              v-model="name"
              expanded
            />
          </o-field>

        <o-field label="Work information">
          <div class="o-demo-form__field-2-col">
            <o-input name="company" placeholder="Company" expanded></o-input>
            <o-input name="email" placeholder="Email" expanded></o-input>
          </div>
        </o-field>

        <o-field label="Address">
          <div class="o-demo-form__field-3-col">
            <o-input name="street" placeholder="Street" expanded></o-input>
            <o-input name="zip" placeholder="Zip Code" expanded></o-input>
            <o-input name="country" placeholder="Country" expanded></o-input>
          </div>
        </o-field>
        <o-field
          label="I need visitors to consent to the following agreements"
          variant="danger"
          :message="messages.privacyTerms"
        >
          <div class="o-demo-form__field-2-col">
            <o-checkbox v-model="privacy">Privacy Policy</o-checkbox>
            <o-checkbox v-model="terms">Terms and Conditions</o-checkbox>
          </div>
        </o-field>
      </o-step-item>

      <o-step-item step="2" label="Account">
        <h1 class="title has-text-centered">Create an account</h1>
        <o-field
          label="Username"
          label-for="username"
          :message="messages.username"
          :variant="messages.username ? 'danger' : ''"
        >
          <o-input
            v-model="username"
            id="username"
            type="text"
            placeholder="Username"
            expanded
          />
        </o-field>
        <o-field
          label="Password"
          label-for="password"
          :variant="messages.password ? 'danger' : ''"
          :message="messages.password"
        >
          <div class="o-demo-form__field-2-col">
            <o-input
              v-model="password"
              id="password"
              type="password"
              placeholder="Password"
              expanded
            />
            <o-input
              v-model="passwordCheck"
              id="repeat-password"
              type="password"
              placeholder="Repeat assword"
              expanded
            />
          </div>
        </o-field>
      </o-step-item>

      <o-step-item label="Finish" step="3">
        <h1 class="title has-text-centered">You're done!</h1>
        <div class="o-demo-form__activate-button-wrapper">
          <o-button outlined variant="primary" @click="activateAccount"
            >Click to activate account</o-button
          >
        </div>
        <p style="position: relative">
          <o-loading full-page :active.sync="isLoading">
            <o-icon icon="sync-alt" size="large" spin></o-icon>
          </o-loading>
        </p>
      </o-step-item>

      <template #navigation="{ previous, next }">
        <div class="o-demo__navigation-wrapper">
          <o-button
            outlined
            icon-left="chevron-left"
            variant="primary"
            v-show="!previous.disabled"
            @click.prevent="previous.action"
          >
            Prev
          </o-button>
          <o-button
            outlined
            icon-right="chevron-right"
            variant="primary"
            v-show="!next.disabled"
            @click.prevent="goNextIfStepIsValid(next.action)"
          >
            Next
          </o-button>
        </div>
      </template>
    </o-steps>
  </section>
  <section>
    <o-field grouped group-multiline>
      <div class="control">
        <o-switch v-model="stickyHeaders">Sticky Headers</o-switch>
      </div>
    </o-field>
    <o-table :data="data" :columns="columns" :sticky-header="stickyHeaders"></o-table>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      currentStep: 1,
      name: "",
      privacy: false,
      username: "",
      password: "",
      passwordCheck: "",
      terms: false,
      isLoading: false,
      messages: {},
      currentMenu: { value: "mr", text: "Mr." },
      menus: [
        { value: "mr", text: "Mr." },
        { value: "mrs", text: "Mrs." },
      ],
      data: [
        {
          id: 1,
          user: { first_name: 'Jesse', last_name: 'Simmons' },
          date: '2016/10/15 13:43:27',
          gender: 'Male'
        },
        {
          id: 2,
          user: { first_name: 'John', last_name: 'Jacobs' },
          date: '2016/12/15 06:00:53',
          gender: 'Male'
        },
        {
          id: 3,
          user: { first_name: 'Tina', last_name: 'Gilbert' },
          date: '2016/04/26 06:26:28',
          gender: 'Female'
        },
        {
          id: 4,
          user: { first_name: 'Clarence', last_name: 'Flores' },
          date: '2016/04/10 10:28:46',
          gender: 'Male'
        },
        {
          id: 5,
          user: { first_name: 'Anne', last_name: 'Lee' },
          date: '2016/12/06 14:38:38',
          gender: 'Female'
        },
        {
          id: 6,
          user: { first_name: 'Sara', last_name: 'Armstrong' },
          date: '2016/09/23 18:50:04',
          gender: 'Female'
        },
        {
          id: 7,
          user: { first_name: 'Anthony', last_name: 'Webb' },
          date: '2016/08/30 23:49:38',
          gender: 'Male'
        },
        {
          id: 8,
          user: { first_name: 'Andrew', last_name: 'Greene' },
          date: '2016/11/20 14:57:47',
          gender: 'Male'
        },
        {
          id: 9,
          user: { first_name: 'Russell', last_name: 'White' },
          date: '2016/07/13 09:29:49',
          gender: 'Male'
        },
        {
          id: 10,
          user: { first_name: 'Lori', last_name: 'Hunter' },
          date: '2016/12/09 01:44:05',
          gender: 'Female'
        }
      ],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
          sticky: true,
          thAttrs: () => ({ class: 'is-sticky-column-one' }),
          tdAttrs: () => ({ class: 'is-sticky-column-one' })
        },
        {
          field: 'user.first_name',
          label: 'First Name'
        },
        {
          field: 'user.last_name',
          label: 'Last Name'
        },
        {
          field: 'date',
          label: 'Date',
          position: 'centered',
          sticky: true,
          thAttrs: () => ({ class: 'is-sticky-column-two' }),
          tdAttrs: () => ({ class: 'is-sticky-column-two' })
        },
        {
          field: 'gender',
          label: 'Gender'
        },
        {
          field: 'id',
          label: 'Column A'
        },
        {
          field: 'id',
          label: 'Column B'
        },
        {
          field: 'id',
          label: 'Column C'
        },
        {
          field: 'id',
          label: 'Column D'
        },
        {
          field: 'id',
          label: 'Column E'
        },
        {
          field: 'id',
          label: 'Column F'
        },
        {
          field: 'id',
          label: 'Column G'
        },
        {
          field: 'id',
          label: 'Column H'
        },
        {
          field: 'id',
          label: 'Column I'
        },
        {
          field: 'id',
          label: 'Column L'
        },
        {
          field: 'id',
          label: 'Column M'
        },
        {
          field: 'id',
          label: 'Column N'
        },
        {
          field: 'id',
          label: 'Column O'
        }
      ],
      stickyHeaders: true
    };
  },
  methods: {
    isAValidStep(stepNumber) {
      this.messages = {};
      switch (stepNumber) {
        case 1:
          if (this.name === "") {
            this.messages.name = "Name is required";
          }
          if (!this.privacy || !this.terms) {
            this.messages.privacyTerms = "You have to accept both";
          }
          break;
        case 2:
          if (this.username === "") {
            this.messages.username = "Username is required";
          }
          if (this.password === "") {
            this.messages.password = "Password is required";
          }
          if (this.password !== this.passwordCheck) {
            this.messages.password = "The two passwords must be equal";
          }
          break;
      }
      this.messages = Object.assign({}, { ...this.messages });
      return Object.keys(this.messages).length === 0;
    },
    goNextIfStepIsValid(action) {
      if (this.isAValidStep(this.currentStep)) {
        action();
      }
    },
    activateAccount() {
      this.isLoading = true;
      setTimeout(() => {
        location.reload();
        this.isLoading = false;
      }, 3 * 1000);
    },
  },
};
</script>