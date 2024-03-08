import http from 'k6/http';
import { sleep } from 'k6';
import * as utils from './utils.js';

export const options = {
  stages: [
    { duration: '30s', target: 25 },
    { duration: '1m30s', target: 100 },
    { duration: '20s', target: 0 },
  ],

  // The following section contains configuration options for execution of this
  // test script in Grafana Cloud.
  //
  // See https://grafana.com/docs/grafana-cloud/k6/get-started/run-cloud-tests-from-the-cli/
  // to learn about authoring and running k6 test scripts in Grafana k6 Cloud.
  //
  // ext: {
  //   loadimpact: {
  //     // The ID of the project to which the test is assigned in the k6 Cloud UI.
  //     // By default tests are executed in default project.
  //     projectID: "",
  //     // The name of the test in the k6 Cloud UI.
  //     // Test runs with the same name will be grouped.
  //     name: "sample.js"
  //   }
  // },

  // Uncomment this section to enable the use of Browser API in your tests.
  //
  // See https://grafana.com/docs/k6/latest/using-k6-browser/running-browser-tests/ to learn more
  // about using Browser API in your test scripts.
  //
  // scenarios: {
  //   // The scenario name appears in the result summary, tags, and so on.
  //   // You can give the scenario any name, as long as each name in the script is unique.
  //   ui: {
  //     // Executor is a mandatory parameter for browser-based tests.
  //     // Shared iterations in this case tells k6 to reuse VUs to execute iterations.
  //     //
  //     // See https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/ for other executor types.
  //     executor: 'shared-iterations',
  //     options: {
  //       browser: {
  //         // This is a mandatory parameter that instructs k6 to launch and
  //         // connect to a chromium-based browser, and use it to run UI-based
  //         // tests.
  //         type: 'chromium',
  //       },
  //     },
  //   },
  // }
};

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function() {
  // Pick a random crud action to perform
  const actions = ['create', 'read', 'compute'];
  const action = actions[Math.floor(Math.random() * actions.length)];

  // Pick a random user to perform the action on
  const userId = Math.floor(Math.random() * 1000);

  const host = 'http://nano-pi.local:30123';

  const num = 1000;

  // Perform the action
  switch (action) {
    case 'create':
      const createPayload = {
        name: utils.getRandomName(),
        email: utils.getRandomEmail(),
      };
      http.post(`${host}/api/v1/users`, JSON.stringify(createPayload), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      break;
    case 'read':
      http.get(`${host}/api/v1/users/${userId}`);
      break;
    case 'update':
      const updatePayload = {
        name: utils.getRandomName(),
        email: utils.getRandomEmail(),
      };
      http.put(`${host}/api/v1/users/${userId}`, JSON.stringify(updatePayload), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      break;
    case 'delete':
      http.del(`${host}/api/v1/users/${userId}`);
      break;
    case 'compute':
      http.get(`${host}/api/v1/comics/generate-report/${num}`);
      break;
  }

  sleep(1);
}
