<template>
  <setting-layout :title="'Payment Method'" :activeSettingMenu="6">
    <div class="card-body">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Add a payment method</h4>
            </div>
            <div class="card-body">
              <div class="verify-content">
                <div class="d-flex align-items-center">
                  <span class="me-3 icon-circle bg-primary text-white"
                    ><i class="icofont-ui-touch-phone"></i
                  ></span>
                  <div class="primary-number">
                    <p class="mb-0">Bank of America</p>
                    <small>Bank **************5421</small>
                    <br />
                    <span class="text-success">Verified</span>
                  </div>
                </div>
                <button class="btn btn-outline-primary">Manage</button>
              </div>
              <hr class="dropdown-divider my-4" />
              <div class="verify-content">
                <div class="d-flex align-items-center">
                  <span class="me-3 icon-circle bg-primary text-white"
                    ><i class="icofont-email"></i
                  ></span>
                  <div class="primary-number">
                    <p class="mb-0">Master Card</p>
                    <small>Credit Card *********5478</small>
                    <br />
                    <span class="text-success">Verified</span>
                  </div>
                </div>
                <button class="btn btn-outline-primary">Manage</button>
              </div>

              <div class="mt-5">
                <b-button
                  v-b-modal.AddNewBank
                  class="btn btn-primary me-3"
                  variant="primary"
                >
                  Add New Bank
                </b-button>
                <b-button
                  v-b-modal.AddNewCard
                  class="btn btn-success me-3"
                  variant="success"
                >
                  Add New Card
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-new-bank />
    <success />
    <add-new-card />
  </setting-layout>
</template>

<script>
import AddNewBank from "../../../components/qCash/payment/AddNewBank.vue";
import AddNewCard from "../../../components/qCash/payment/AddNewCard.vue";
import Success from "../../../components/qCash/payment/Success.vue";
import SettingLayout from "../../../components/qCash/settings/SettingLayout.vue";
export default {
  components: { SettingLayout, AddNewBank, Success, AddNewCard },
};
</script>
