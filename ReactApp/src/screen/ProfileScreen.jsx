import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Switch
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../config/theme';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export default function Example({navigation, route}) {
  const [usersname, setusername] = useState()
  React.useEffect(() => {
    if(route.params != undefined){
      setusername(route.params.username)
    }
  })
  console.log(usersname) 
  const {theme, updateTheme} = useContext(ThemeContext);
  let ActiveColor = colors[theme.mode]

  const [isActive, setIsActive] = useState(theme.mode === "dark");

  const handleSwitch = () => {
    updateTheme();
    setIsActive((previousState) => !previousState)
  }

  const styles = StyleSheet.create({
    container: {
      padding: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    /** Profile */
    profile: {
      padding: 24,
      backgroundColor: ActiveColor.background,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileAvatarWrapper: {
      position: 'relative',
    },
    profileAvatar: {
      width: 72,
      height: 72,
      borderRadius: 9999,
    },
    profileAction: {
      position: 'absolute',
      right: -4,
      bottom: -10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 9999,
      backgroundColor: '#007bff',
    },
    profileName: {
      marginTop: 20,
      fontSize: 19,
      fontWeight: '600',
      color: ActiveColor.label,
      textAlign: 'center',
    },
    profileHP: {
      marginTop: 5,
      fontSize: 16,
      color: ActiveColor.text,
      textAlign: 'center',
    },
    /** Section */
    section: {
      paddingHorizontal: 24,
    },
    sectionTitle: {
      paddingVertical: 12,
      fontSize: 12,
      fontWeight: '600',
      color: ActiveColor.section,
      textTransform: 'uppercase',
      letterSpacing: 1.1,
    },
    VersionTitle: {
      paddingVertical: 12,
      fontSize: 11,
      fontWeight: '500',
      color: ActiveColor.section,
      textTransform: 'uppercase',
      letterSpacing: 1.1,
    },
    sectionSignOut: {
      paddingHorizontal: 24,
      marginBottom:25,
    },
    /** Row */
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 50,
      backgroundColor: ActiveColor.box,
      borderRadius: 8,
      marginBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },
    rowIcon: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      marginRight: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: '400',
      color: ActiveColor.label,
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    signoutLabel:{
      fontSize: 17,
      color: '#FFFFFF',
      fontWeight: 'bold',
      margin:7
    },
    signout: {
      alignItems: 'center',
      height: 40,
      backgroundColor: '#E71919',
      borderRadius: 20,
      marginBottom: 12,
    }
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: ActiveColor.background}}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon
                    color="#fff"
                    name="edit-3"
                    size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.profileName}>Udin SP</Text>

            <Text style={styles.profileHP}>
              0827382932737
            </Text>
          </View>
        </View>

        <ScrollView>
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Information</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("AccountSetting")
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <MaterialCommunityIcons color="#fff" name="account-settings" size={20} />
              </View>

              <Text style={styles.rowLabel}>Account Settings</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <View style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
                <FeatherIcon color="#fff" name="moon" size={20} />
              </View>

              <Text style={styles.rowLabel}>Dark Mode</Text>

              <View style={styles.rowSpacer} />

              <Switch
                value={isActive}
                onValueChange={handleSwitch}
              />
            </View>

          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Help</Text>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                <AntDesign color="#fff" name="customerservice" size={20} />
              </View>

              <Text style={styles.rowLabel}>Customer Service</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon
                  color="#fff"
                  name="navigation"
                  size={20} />
              </View>

              <Text style={styles.rowLabel}>Feedback & Report</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TOS")
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
                <FeatherIcon color="#fff" name="flag" size={20} />
              </View>

              <Text style={styles.rowLabel}>Terms & Conditions</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}>
              <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                <FeatherIcon color="#fff" name="star" size={20} />
              </View>

              <Text style={styles.rowLabel}>Rate in App Store</Text>

              <View style={styles.rowSpacer} />

              <FeatherIcon
                color="#C6C6C6"
                name="chevron-right"
                size={20} />
            </TouchableOpacity>
          <Text style={styles.VersionTitle}>Version: 1.5.4</Text>
          </View>

          <View style={styles.sectionSignOut}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login")
              }}
              style={styles.signout}>

              <Text style={styles.signoutLabel}>Sign Out</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Test")}
              style={styles.signout}>

              <Text style={styles.signoutLabel}>Delete Account</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

