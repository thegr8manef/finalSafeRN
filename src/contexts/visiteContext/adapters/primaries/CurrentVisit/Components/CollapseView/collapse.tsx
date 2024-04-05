import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {AfterCollapse} from './afterCollapse';
import {BeforeCollapse} from './beforeCollapse';

interface Props {
  site: string;
  accompagnatsList: any[];
  date: string;
  comment: string;
  type: Number;
}
export const Collapse = (props: Props) => {
  const [selectedSite, setSelectedSite] = useState<boolean>(false);
  const toggleCollapse = () => {
    setSelectedSite(!selectedSite);
  };

  return (
    <>
      {selectedSite ? (
        <View style={styles.container}>
          <AfterCollapse
            toggleCollapse={() => toggleCollapse()}
            site={props.site}
            accompagnatsList={props.accompagnatsList}
            date={props.date}
            comment={props.comment}
            type={props.type}
          />
        </View>
      ) : (
        <View style={styles.beforeCollapse}>
          <BeforeCollapse
            toggleCollapse={() => toggleCollapse()}
            site={props.site}
            date={props.date}
            type={props.type}
          />
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '55%',
  },
  beforeCollapse: {height: '25%'},
});
