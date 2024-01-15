<template>
  <setting-layout :title="'Fees'" :activeSettingMenu="8">
    <div class="card-body">
      <div class="row">
        <div class="col-xxl-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Normal User</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Tier</th>
                      <th>Total Qash holding</th>
                      <th>30-day Trading Volume (BTC)</th>
                      <th>Maker Fee</th>
                      <th>Taker Fee</th>
                      <th>24h Withdrawal Limit (BTC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lv 1</td>
                      <td>&lt; 500</td>
                      <td>&lt; 1000</td>
                      <td>&lt; 0.100%</td>
                      <td>&lt; 0.150%</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Lv 1</td>
                      <td>&lt; 500</td>
                      <td>&lt; 1000</td>
                      <td>&lt; 0.100%</td>
                      <td>&lt; 0.150%</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Lv 1</td>
                      <td>&lt; 500</td>
                      <td>&lt; 1000</td>
                      <td>&lt; 0.100%</td>
                      <td>&lt; 0.150%</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Lv 1</td>
                      <td>&lt; 500</td>
                      <td>&lt; 1000</td>
                      <td>&lt; 0.100%</td>
                      <td>&lt; 0.150%</td>
                      <td>500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">VIP User</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Tier</th>
                      <th>Total Qash holding</th>
                      <th>30-day Trading Volume (BTC)</th>
                      <th>Maker Fee</th>
                      <th>Taker Fee</th>
                      <th>24h Withdrawal Limit (BTC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lv 1</td>
                      <td>&lt; 500</td>
                      <td>&lt; 1000</td>
                      <td>&lt; 0.100%</td>
                      <td>&lt; 0.150%</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Lv 1</td>
                      <td>&lt; 500</td>
                      <td>&lt; 1000</td>
                      <td>&lt; 0.100%</td>
                      <td>&lt; 0.150%</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Lv 1</td>
                      <td>&lt; 500</td>
                      <td>&lt; 1000</td>
                      <td>&lt; 0.100%</td>
                      <td>&lt; 0.150%</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>Lv 1</td>
                      <td>&lt; 500</td>
                      <td>&lt; 1000</td>
                      <td>&lt; 0.100%</td>
                      <td>&lt; 0.150%</td>
                      <td>500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
