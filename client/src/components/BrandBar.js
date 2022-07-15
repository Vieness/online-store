import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Breadcrumbs, Link} from "@mui/material";

const BrandBar = observer(() => {
  const {device} = useContext(Context)
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {device.brands.map(brand =>
        <Link
          onClick={handleClick}
          key={brand.id}
          underline="hover"
          color="inherit"
          href="/">
          {brand.name}
        </Link>
      )}
    </Breadcrumbs>
  );
});

export default BrandBar;