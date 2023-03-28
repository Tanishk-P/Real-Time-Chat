import { Input, Typography } from 'antd';
import React from 'react';

function CommonInput(props) {
  const {label, size, errorText, borderRadius = 0} = props;
  return (
    <div>
        <label style={{ fontSize: 14 }}>{label}</label>
        <Input {...props} style={{ borderRadius}} size={size} onChange={(event) => {props.handleChangeText(event.target.value);}} />
        {errorText !== null && <Typography.Text type='danger'>{errorText}</Typography.Text> }
    </div>
  )
}

export default CommonInput;