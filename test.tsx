// untuk create componenet multiple
            // let items = c.editor.multiple.active || [];
            // if (get(items, "length")) {
            //   console.log("masuk");
            //   const json = {
            //     id: createId(),
            //     name: `New Component`,
            //     type: "item",
            //     dim: { w: "fit", h: "fit" },
            //     childs: [],
            //   } as IItem;
            //   let data: any = c.editor.multiple.active;
            //   data = data.map((e: MContent) => {
            //     let jso = e.toJSON();
            //     if (jso.type === "section") {
            //       const newItem = {
            //         id: jso.id,
            //         name: jso.name,
            //         type: "item",
            //         dim: { w: "fit", h: "fit" },
            //         childs: jso.childs,
            //         component: get(jso, "component"),
            //         adv: jso.adv,
            //       } as IItem;
            //       return newItem;
            //     }
            //     return jso;
            //   });
            //   let rootContent = JSON.parse(JSON.stringify({ data }));
            //   let flat = rootContent.data as Array<IContent>;
            //   let res = flatTree(flat);
            //   json.childs = res;
            //   const map = new Y.Map() as MContent;
            //   syncronize(map as any, fillID(json));

            //   item.parent.forEach((e: MContent, idx) => {
            //     if (e === item) {
            //       item.parent.insert(idx, [map]);
            //     }
            //   });
            //   let id_item = map.get("id");
            //   if (id_item)
            //     api
            //       .comp_create({
            //         item_id: id_item,
            //         site_id: wsdoc.site?.id || "",
            //         page_id: id.startsWith("COMP_") ? undefined : wsdoc.page_id,
            //         comp_id: id.startsWith("COMP_")
            //           ? id.substring(5)
            //           : undefined,
            //       })
            //       .then((e) => {
            //         if (e) {
            //           wsdoc.compGroup = {};
            //           filterFlatTree(items, c.editor.tree.list);
            //           c.editor.multiple.active = [];
            //         }
            //         c.render();
            //       });
            //   c.render();
            // } else {
            // }
