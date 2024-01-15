<template>
  <setting-layout :title="'Security'" :activeSettingMenu="3">
    <div class="card-body">
      <div class="row">
        <div class="col-xxl-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">2-step verification</h4>
            </div>
            <div class="card-body">
              <div class="verify-content">
                <div class="d-flex align-items-center">
                  <span class="me-3 icon-circle bg-primary text-white"
                    ><i class="icofont-ui-touch-phone"></i
                  ></span>
                  <div class="primary-number">
                    <p class="mb-0"><strong>+xxx xxxxxxxx60</strong></p>
                    <small>Keep your primary phone number up-to-date</small>
                    <br />
                    <span class="text-success">Required</span>
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
                    <p class="mb-0"><strong>hello@example.com</strong></p>
                    <small>Keep your primary email up-to-date</small>
                    <br />
                    <span class="text-success">Required</span>
                  </div>
                </div>
                <button class="btn btn-outline-primary">Manage</button>
              </div>
              <hr class="dropdown-divider my-4" />
              <div class="verify-content">
                <div class="d-flex align-items-center">
                  <span class="me-3 icon-circle bg-primary text-white"
                    ><i class="icofont-lock"></i
                  ></span>
                  <div class="primary-number">
                    <p class="mb-0"><strong>*************</strong></p>
                    <small>You can change your password</small>
                    <br />
                    <span class="text-success">Required</span>
                  </div>
                </div>
                <button class="btn btn-outline-primary">Manage</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Identity verification</h4>
            </div>
            <div class="card-body">
              <div class="verify-content">
                <div class="d-flex align-items-center">
                  <span class="me-3 icon-circle bg-primary text-white"
                    ><i class="icofont-id"></i
                  ></span>
                  <div class="primary-number">
                    <p class="mb-0">xxx xxxxx xxx40</p>
                    <small>Social Security Number</small>
                    <br />
                    <span class="text-success">Verified</span>
                  </div>
                </div>
                <button
                  class="btn btn-outline-primary"
                  data-toggle="modal"
                  data-target="#idCardModal"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">
                Use 2-step verification to secure your transactions
              </h4>
            </div>
            <div class="card-body">
              <form action="#" @submit.prevent="">
                <div class="col-12">
                  <div class="form-check form-switch mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="s1"
                      checked=""
                    />
                    <label class="form-check-label" for="s1"
                      >Any amount of cryptocurrency
                      <b class="text-success">Most secure</b></label
                    >
                  </div>
                  <div class="form-check form-switch mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="s2"
                      checked=""
                    />
                    <label class="form-check-label" for="s2"
                      >Over 1.2000 BTC per day</label
                    >
                  </div>

                  <div class="form-check form-switch mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="s3"
                      checked=""
                    />
                    <label class="form-check-label" for="s3"
                      >Never <b class="text-danger">Least secure</b></label
                    >
                  </div>
                </div>

                <div class="col-12">
                  <button class="btn btn-success">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </setting-layout>
</template>

<script>
import SettingLayout from "../../../components/qCash/settings/SettingLayout.vue";
export default {
  components: { SettingLayout },
};
</script>
