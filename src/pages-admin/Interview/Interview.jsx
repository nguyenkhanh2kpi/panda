import React from "react";
import { Header } from "../../Components-admin";
import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const Interview = () => {
    const accessToken = JSON.parse(localStorage.getItem("data")).access_token;
    return (
        <>
            <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
                <Header category="App" title="Interview" />
                <IconButton
                    color="#03C9D7"
                    backgroundColor="#f7f7f7"
                    aria-label="Search database"
                    icon={<AddIcon />}
                    // onClick={() => navigate("/question/add")}
                />
            </div>
        </>
    );
};
