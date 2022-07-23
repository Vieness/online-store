import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Breadcrumbs, Link} from "@mui/material";

const BrandBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {device.brands.map(brand =>
        <Link
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
          underline="hover"
          color="black"
          underline={'none'}
          component="button"
          >
          {brand.name}
        </Link>
      )}
    </Breadcrumbs>
  );
});

export default BrandBar;