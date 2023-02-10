import { Select, Space } from "antd";
import React from "react";
import { connect } from 'react-redux';
import { selectStateChange, selectElectionType } from '~/store/app/action';

const Filters = ({dispatch}) => {
  const { Option } = Select;

  const handleChange = (e, type) => {
    if(type === 'election_type'){
      dispatch(selectElectionType(e));
    }else if(type === 'state'){
      dispatch(selectStateChange(e));
    }else{
      
    }
  }

  return (
    <Space>
      <Select
        defaultValue="Select Election Type"
        style={{ width: 200 }}
        onChange={(e)=>handleChange(e, 'election_type')}
      >
        <Option value="Select Election Type">Select Election Type</Option>
        <Option value="Governor">Governor</Option>
        <Option value="House of Assemblies">House of Assemblies</Option>
        <Option value="Senators">Senators</Option>
        <Option value="House of Reps">House of Reps</Option>
        <Option value="President">President</Option>
      </Select>
      <Select
        defaultValue="Select State"
        style={{ width: 200 }}
        onChange={(e)=>handleChange(e, 'state')}
      >
        <Option value="Select State">Select State</Option>
        <Option value="Lagos">Lagos</Option>
        <Option value="Ogun">Ogun</Option>
        <Option value="Imo">Imo</Option>
      </Select>
      <Select
        defaultValue="Select lga"
        style={{ width: 200 }}
        onChange={(e)=>handleChange(e, 'lga')}
      >
        <Option value="Select lga">Select lga</Option>
        <Option value="Lagos">Lagos</Option>
        <Option value="Ogun">Ogun</Option>
        <Option value="Imo">Imo</Option>
      </Select>
      <Select
        defaultValue="Select Unit"
        style={{ width: 200 }}
        onChange={(e)=>handleChange(e, 'Unit')}
      >
        <Option value="Select Unit">Select Unit</Option>
        <Option value="Lagos">Lagos</Option>
        <Option value="Ogun">Ogun</Option>
        <Option value="Imo">Imo</Option>
      </Select>
    </Space>
  );
};
const mapStateToProps = ({dispatch, app}) =>({
  selectedState: app.selectedState,
  dispatch
})

export default connect(mapStateToProps)(Filters);
