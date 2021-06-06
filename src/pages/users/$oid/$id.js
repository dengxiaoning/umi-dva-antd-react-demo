import React from 'react';
import { useParams } from 'umi';

function $id() {
  const reqParams = useParams();
  console.log(reqParams);
  return (
    <div>
      <h3>{reqParams.oid}</h3>
      <h3>{reqParams.id}</h3>
    </div>
  );
}
export default $id;
