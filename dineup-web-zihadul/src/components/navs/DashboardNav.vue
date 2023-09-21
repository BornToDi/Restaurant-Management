<template>
  <div
    class="bg-white flex flex-col items-center justify-between overflow-hidden py-2"
  >
    <div>
      <q-item>
        <q-item-section top avatar>
          <q-img
            src="https://cdn.ichinglab.com/ichinglablogo.png"
            spinner-color="primary"
            spinner-size="82px"
            style="width: 90px; height: 82px"
          />
        </q-item-section>
        <!-- <q-item-section>
          <q-item-label>Iching Restaurant</q-item-label>
        </q-item-section> -->
      </q-item>
    </div>
    <div class="flex flex-col justify-around w-full">
      <q-item
        clickable
        v-ripple
        v-for="(item, i) in navItems"
        :key="i"
        :to="item.link"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section> {{ item.label }} </q-item-section>
      </q-item>
    </div>
    <div class="flex flex-col justify-around w-full">
      <q-expansion-item
        expand-icon-toggle
        expand-separator
        icon="event_note"
        group="ichingGroupToggle"
        label="General"
      >
        <q-list class="q-pa-md">
          <q-item clickable v-ripple to="/general">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Phone Numbers </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/openingHours">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Opening Hours </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/servicesCharges">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Services Charge </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/paymentsMethods">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Payments Methods </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/vatTax">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> VAT / TAX </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/generalSD">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> SD </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </div>
    <div class="flex flex-col justify-around w-full">
      <q-expansion-item
        expand-icon-toggle
        expand-separator
        icon="category"
        group="ichingGroupToggle"
        label="Items"
      >
        <q-list class="q-pa-md">
          <q-item clickable v-ripple to="/items">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Items </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/menuBuffets">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Buffets </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </div>
    <div class="flex flex-col justify-around w-full">
      <q-expansion-item
        expand-icon-toggle
        expand-separator
        group="ichingGroupToggle"
        icon="signal_wifi_off"
        label="Services"
      >
        <q-list class="q-pa-md">
          <q-item clickable v-ripple to="/service">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Dine In </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/pickUp">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Pickup </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/serviceDelivery">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Delivery </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </div>
    <div class="flex flex-col justify-around w-full">
      <q-expansion-item
        expand-icon-toggle
        expand-separator
        group="ichingGroupToggle"
        icon="list_alt"
        label="Order Management"
      >
        <q-list class="q-pa-md">
          <q-item clickable v-ripple to="/order">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Orders </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/orderManagement">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Order Management </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </div>
    <div class="flex flex-col justify-around w-full">
      <q-expansion-item
        expand-icon-toggle
        group="ichingGroupToggle"
        expand-separator
        icon="summarize"
        label="Reports"
      >
        <q-list class="q-pa-md">
          <q-item clickable v-ripple to="/report">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Sales Reports </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </div>

    <div class="flex flex-col justify-around w-full">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="logout" />
        </q-item-section>

        <q-item-section> Logout </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardNav',
  setup() {
    const navItems = [
      {
        label: 'My Restaurant',
        icon: 'las la-tachometer-alt',
        link: '/admin',
      },

      {
        label: 'Products',
        icon: 'las la-archive',
        link: '/products',
      },
      {
        label: 'Invoices',
        icon: 'las la-file-invoice',
        link: '/invoices',
      },

      {
        label: 'Offers',
        icon: 'lar la-list-alt',
        link: '/offer',
      },

      {
        label: 'Setting',
        icon: 'tune',
        link: '/setting',
      },
    ];

    return {
      navItems,
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2,
      },
    };
  },
};
</script>
