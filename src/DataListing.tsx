import React from 'react';
import {View, Text, FlatList} from 'react-native';

interface Props {
  list: Array<any>;
}

const DataListing = (props: Props) => {
  const renderItems = (rowData: any) => {
    const {item, index} = rowData;
    return (
      <View>
        <Text>
          {item.name} {item.place} {item.company}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={props.list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItems}
      />
    </View>
  );
};

export default DataListing;
