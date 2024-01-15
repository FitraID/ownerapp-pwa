<template>
  <b-modal id="buySuccessleModal" hide-footer>
    <template #modal-header="{ close }">
      <h5 class="modal-title">Success</h5>
      <b-button
        class="btn-close"
        data-dismiss="modal"
        aria-label="Close"
        @click="close()"
      >
      </b-button>
    </template>
    <template>
      <div class="auth-form">
        <form @submit.prevent="" class="identity-upload">
          <div class="identity-content">
            <span class="icon"><i class="icofont-check"></i></span>
            <p>Congratulation. Your transaction is successful</p>
          </div>
        </form>
        <div class="card-footer text-center">
          <router-link to="signup">Go to Transaction</router-link>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "BuySuccessleModal",
};
</script>
