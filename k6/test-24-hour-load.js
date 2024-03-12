import http from 'k6/http';
import { sleep } from 'k6';
import * as act from './actions.js';

// TODO: Implement a test that runs for 24 hours

export const options = {
  stages: [
    // { duration: '15m', target: 32 },
    // { duration: '15m', target: 32 },
    // { duration: '15m', target: 28 },
    // { duration: '15m', target: 21 },
    // { duration: '15m', target: 15 },
    // { duration: '15m', target: 18 },
    // { duration: '15m', target: 17 },
    // { duration: '15m', target: 18 },
    // { duration: '15m', target: 16 },
    // { duration: '15m', target: 20 },
    // { duration: '15m', target: 17 },
    // { duration: '15m', target: 14 },
    // { duration: '15m', target: 10 },
    // { duration: '15m', target: 8 },
    // { duration: '15m', target: 5 },
    // { duration: '15m', target: 2 },
    // { duration: '15m', target: 0 },
    // { duration: '15m', target: 1 },
    // { duration: '15m', target: 0 },
    // { duration: '15m', target: 1 },
    // { duration: '15m', target: 2 },
    // { duration: '15m', target: 13 },
    // { duration: '15m', target: 17 },
    // { duration: '15m', target: 22 },
    // { duration: '15m', target: 29 },
    // { duration: '15m', target: 41 },
    // { duration: '15m', target: 50 },
    // { duration: '15m', target: 60 },
    // { duration: '15m', target: 67 },
    { duration: '15m', target: 75 },
    { duration: '15m', target: 82 },
    { duration: '15m', target: 85 },
    { duration: '15m', target: 90 },
    { duration: '15m', target: 92 },
    { duration: '15m', target: 96 },
    { duration: '15m', target: 99 },
    { duration: '15m', target: 100 },
    { duration: '15m', target: 99 },
    { duration: '15m', target: 96 },
    { duration: '15m', target: 95 },
    { duration: '15m', target: 93 },
    { duration: '15m', target: 90 },
    { duration: '15m', target: 87 },
    { duration: '15m', target: 85 },
    { duration: '15m', target: 83 },
    { duration: '15m', target: 81 },
    { duration: '15m', target: 79 },
    { duration: '15m', target: 79 },
    { duration: '15m', target: 79 },
    { duration: '15m', target: 75 },
    { duration: '15m', target: 71 },
    { duration: '15m', target: 68 },
    { duration: '15m', target: 62 },
    { duration: '15m', target: 60 },
    { duration: '15m', target: 56 },
    { duration: '15m', target: 53 },
    { duration: '15m', target: 51 },
    { duration: '15m', target: 53 },
    { duration: '15m', target: 52 },
    { duration: '15m', target: 51 },
    { duration: '15m', target: 49 },
    { duration: '15m', target: 50 },
    { duration: '15m', target: 46 },
    { duration: '15m', target: 44 },
    { duration: '15m', target: 41 },
    { duration: '15m', target: 39 },
    { duration: '15m', target: 37 },
    { duration: '15m', target: 34 },
    { duration: '15m', target: 33 },
    { duration: '15m', target: 34 },
    { duration: '15m', target: 35 },
    { duration: '15m', target: 39 },
    { duration: '15m', target: 43 },
    { duration: '15m', target: 51 },
    { duration: '15m', target: 57 },
    { duration: '15m', target: 68 },
    { duration: '15m', target: 79 },
    { duration: '15m', target: 88 },
    { duration: '15m', target: 90 },
    { duration: '15m', target: 87 },
    { duration: '15m', target: 82 },
    { duration: '15m', target: 77 },
    { duration: '15m', target: 69 },
    { duration: '15m', target: 63 },
    { duration: '15m', target: 56 },
    { duration: '15m', target: 51 },
    { duration: '15m', target: 47 },
    { duration: '15m', target: 44 },
    { duration: '15m', target: 39 },
    { duration: '15m', target: 41 },
    { duration: '15m', target: 38 },
    { duration: '15m', target: 49 },
    { duration: '15m', target: 47 },
    { duration: '15m', target: 43 },
    { duration: '15m', target: 40 },
    { duration: '15m', target: 40 },
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
  //     name: "script.js"
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
export default function () {
  // Pick a random crud action to perform
  const actions = [
    'user-create', 'user-read', 'user-update', 'user-del', 
    'compute', 'comic-create', 'comic-read', 'comic-update', 'comic-del',
    'collection-create', 'collection-read', 'collection-update', 'collection-del',
  ];
  const action = actions[Math.floor(Math.random() * actions.length)];

  // Pick a random user to perform the action on

  const host = 'http://nano-pi.local:30123';

  const num = 37;

  // Perform the action
  switch (action) {
    case 'user-create':
      act.userCreate(host, http);
      break;
    case 'user-read':
      act.userRead(host, http);
      break;
    case 'user-update':
      act.userUpdate(host, http);
      break;
    case 'user-del':
      act.userDelete(host, http);
      break;
    case 'compute':
      act.comicsGenerateReport(host, http, num);
      break;
    case 'comic-create':
      act.comicsCreate(host, http);
      break;
    case 'comic-read':
      act.comicsRead(host, http);
      break;
    case 'comic-update':
      act.comicsUpdate(host, http);
      break;
    case 'comic-del':
      act.comicsDelete(host, http);
      break;
    case 'collection-create':
      act.collectionCreate(host, http);
      break;
    case 'collection-read':
      act.collectionRead(host, http);
      break;
    case 'collection-update':
      act.collectionUpdate(host, http);
      break;
    case 'collection-del':
      act.collectionDelete(host, http);
      break;
  }

  sleep(1);
}
