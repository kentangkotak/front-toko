import { defineStore } from "pinia";
import { api } from "boot/axios";

//const { api } = require("src/boot/axios");

export const useListUser = defineStore("master_user_table", {
  state: () => ({
    count: 0,
    items: [],
    meta: {},
    item: {},
    loading: false,
    params: {
      q: "",
      page: 1,
      per_page: 10,
      order_by: "created_at",
      sort: "desc",
    },
    columns: [],
    columnHide: ["id", "created_at", "updated_at", "deleted_at"],
  }),
  getters: {
    getterColumns(state) {
      return state.columns.filter((el) => !state.columnHide.includes(el));
    },
  },
  actions: {
    setColumns(payload) {
      this.columns = [
        // {
        //   name: "index",
        //   label: "No.",
        //   field: "index",
        // },
        {
          name: "name",
          required: true,
          label: "Nama",
          align: "left",
          field: (row) => row.name,
        },
        {
          name: "email",
          label: "E-mail",
          align: "left",
          field: (row) => row.email,
        },
      ];
    },
    // ambil
    getDataTable() {
      //waitLoad("show");
      //console.log("wew");
      const params = { params: this.params };
      return new Promise((resolve, reject) => {
        // console.log(params);
        api
          .get("listuser", params)
          .then((resp) => {
            //waitLoad("done");
            if (resp.status === 200) {
              //console.log(resp);
              this.items = resp.data.data;
              this.meta = resp.data;
              this.setColumns();
              //this.params = resp.data;
              resolve(resp.data);
            }
          })
          .catch((err) => {
            // waitLoad("done");
            reject(err);
          });
      });
    },
  },
});

// let rows = [];
// for (let i = 0; i < 1000; i++) {
//   rows = rows.concat(seed.slice(0).map((r) => ({ ...r })));
// }
// rows.forEach((row, index) => {
//   row.index = index;
// });
