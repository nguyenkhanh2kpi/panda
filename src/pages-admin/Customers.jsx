import React from "react";
import { Link } from "react-router-dom";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { loadUserManage } from '../redux/UserManage/Action';
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../Components-admin";

import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: false, allowEditing: false };

  const handle=(args)=>{
     if (args.commandColumn.buttonOption.content === "Delete")
     {
      console.log("ga qua ")
     }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    // getData(typeOfProduct).then((res) => setProductArr(res));
    dispatch(loadUserManage());
  }, []);

  const allUser = useSelector((store) => store.allUser.data);
  console.log(allUser)
  let value=[]
  

  allUser.map((x) => {
    if(x.permission=="RECRUITER")
    {
      value.push(x)
    }
  });
 console.log(value)
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Nhà tuyển dụng" />
      <GridComponent
        dataSource={value}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
        commandClick={handle}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => (
          
            <ColumnDirective key={index} {...item} />
       
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
