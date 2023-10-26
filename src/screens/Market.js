import {
  Animated,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
// import {getCoinMarket} from '../../stores/market/MarketAction';
import {COLORS, FONT, SIZES, icons} from '../../constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import constants from '../constrants/constrants';
import {LineChart} from 'react-native-chart-kit';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fetchCoinMarket} from '../../stores/coinMarketSlice';
import {fetchHoldings} from '../../stores/holdingsSlice';
import HeaderTop from '../component/profile/HeaderTop';

const marketTabs = constants.marketTabs.map(marketTab => ({
  ...marketTab,
  ref: createRef(),
}));

const {width, height} = Dimensions.get('window');

const TabIndicator = ({measureLayout, scrollX}) => {
  const inputRange = marketTabs.map((_, i) => i * width);

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: '100%',
        width: (widthPercentageToDP(100) - heightPercentageToDP(2)) / 2,

        backgroundColor: COLORS.gray2,
        borderRadius: heightPercentageToDP(2),

        transform: [
          {
            translateX,
          },
        ],
      }}></Animated.View>
  );
};

const Tabs = ({scrollX, onMarketTabPress}) => {
  // for tab layout selecetion
  const [measureLayout, setMeasureLayout] = useState([]);

  const THEME = useSelector(state => state.theme);

  const containerRef = useRef();

  useEffect(() => {
    let ml = [];

    marketTabs.forEach(marketTab => {
      marketTab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });

          if (ml.length === marketTabs.length) {
            setMeasureLayout(ml);
          }
        },
      );
    });
  }, [containerRef.current]);

  return (
    <View
      ref={containerRef}
      style={{
        flexDirection: 'row',
      }}>
      {/* Tab indicator */}
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}

      {/** Tabs */}
      {marketTabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`MarketTab-${index}`}
            style={{flex: 1}}
            // onpress
            onPress={() => onMarketTabPress(index)}>
            <View
              ref={item.ref}
              style={{
                paddingHorizontal: 15,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
              }}>
              <Text
                style={{
                  color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark,
                  fontFamily: FONT.semibold,
                }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TextButton = ({label, consterStyle, onPress}) => {
  const THEME = useSelector(state => state.theme);
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        paddingHorizontal: heightPercentageToDP(2),
        paddingVertical: heightPercentageToDP(1),
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        borderRadius: heightPercentageToDP(2),
        marginEnd: heightPercentageToDP(1),
        ...consterStyle,
      }}
      onPress={onPress}>
      <Text style={{color: THEME.data === 'DARK' ? COLORS.white : COLORS.purpleDark, fontFamily: FONT.regular}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Market = () => {
  const THEME = useSelector(state => state.theme);
  console.log('THEME : ' + THEME.data);

  const dispatch = useDispatch();
  const myHoldings = useSelector(state => state.holdings.myHoldings);
  const coins = useSelector(state => state.coinMarket.coins);
  // Fetch data when the component mounts
  useEffect(() => {
    // Fetch your holdings and coin market data
    // dispatch(fetchHoldings(/* Pass your parameters here */));
    dispatch(fetchCoinMarket());
    console.log('Hey from EFFECt');

    coins.map(c => {
      console.log('DATA : ' + c.name);
    });
  }, []);

  const scrollX = useRef(new Animated.Value(0)).current;

  const marketTabScrollViewRef = useRef();

  const onMarketTabPress = useCallback(marketTabIndex => {
    marketTabScrollViewRef?.current?.scrollToOffset({
      offset: marketTabIndex * widthPercentageToDP(100),
    });
  });

  // useEffect(() => {
    
  // }, []);

 

  function renderTabBar() {
    const THEME = useSelector(state => state.theme);
    return (
      <View
        style={{
          marginTop: heightPercentageToDP(2),
          marginHorizontal: heightPercentageToDP(2),
          borderRadius: heightPercentageToDP(2),
          backgroundColor:
            THEME.data === 'LIGHT' ? COLORS.lightGray : COLORS.skyBlue,
        }}>
        <Tabs scrollX={scrollX} onMarketTabPress={onMarketTabPress} />
      </View>
    );
  }

  function renderButton() {
    
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: heightPercentageToDP(2),
          marginHorizontal: heightPercentageToDP(2),
        }}>
        <TextButton label={'Favorites'}></TextButton>
        <TextButton label={'Gainer'}></TextButton>
        <TextButton label={'Looser'}></TextButton>
        <TextButton label={'Volume'}></TextButton>
      </View>
    );
  }

  function renderList() {
    const THEME = useSelector(state => state.theme);
    return (
      <Animated.FlatList
        ref={marketTabScrollViewRef}
        data={marketTabs}
        contentContainerStyle={{
          marginTop: heightPercentageToDP(2),
          borderRadius: heightPercentageToDP(1),
        }}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                width: widthPercentageToDP(100),
              }}>
              <FlatList
                data={coins}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                  let priceColor =
                    item.price_change_percentage_7d_in_currency == 0
                      ? COLORS.gray2
                      : item.price_change_percentage_7d_in_currency > 0
                      ? COLORS.green
                      : COLORS.red;

                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingHorizontal: heightPercentageToDP(1),
                        margin: heightPercentageToDP(1),
                        backgroundColor:
                          THEME.data === 'LIGHT'
                            ? COLORS.lightGray
                            : COLORS.skyBlue,
                        borderRadius: heightPercentageToDP(1),
                      }}>
                      {/** COins */}
                      <View
                        style={{
                          flex: 1.5,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{uri: item.image}}
                          style={{height: 20, width: 20}}
                        />

                        <Text
                          style={{
                            marginLeft: heightPercentageToDP(2),
                            color:
                              THEME.data === 'DARK'
                                ? COLORS.white
                                : COLORS.purpleDark,
                            fontFamily: FONT.semibold,
                          }}>
                          {item.name}
                        </Text>
                      </View>

                      {/** Line Chart */}

                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <LineChart
                          withVerticalLabels={false}
                          withHorizontalLabels={false}
                          withDots={false}
                          withInnerLines={false}
                          withVerticalLines={false}
                          withOuterLines={false}
                          data={{
                            datasets: [{data: item.sparkline_in_7d.price}],
                          }}
                          width={100}
                          height={60}
                          chartConfig={{
                            backgroundGradientFrom:
                              THEME.data === 'LIGHT'
                                ? COLORS.lightGray
                                : COLORS.skyBlue,
                            backgroundGradientTo:
                              THEME.data === 'LIGHT'
                                ? COLORS.lightGray
                                : COLORS.skyBlue,
                            color: () => priceColor,
                          }}
                          bezier
                          style={{
                            paddingRight: 0,
                          }}
                        />
                      </View>

                      {/** COins Figures */}

                      <View
                        style={{
                          flex: 1,
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            color:
                              THEME.data === 'DARK'
                                ? COLORS.white
                                : COLORS.purpleDark,
                            fontFamily: FONT.semibold,
                          }}>
                          $ {item.current_price}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                          }}>
                          {item.price_change_percentage_7d_in_currency != 0 && (
                            <AntDesign
                              name={
                                item.price_change_percentage_7d_in_currency < 0
                                  ? 'caretdown'
                                  : 'caretup'
                              }
                              size={12}
                              color={priceColor}
                              style={{alignSelf: 'center', marginRight: 5}}
                            />
                          )}

                          <Text
                            style={{
                              marginLeft: 5,
                              color: priceColor,
                              fontFamily: FONT.regular,
                            }}>
                            {item.price_change_percentage_7d_in_currency.toFixed(
                              2,
                            )}
                            %
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}></Animated.FlatList>
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: THEME.data === 'LIGHT' ? COLORS.white : COLORS.purpleDark,
        ...styles.parentContainer,
      }}>
      {/** Header */}

      <HeaderTop value={'Market'} />

      {/** Tab Bar  */}
      {renderTabBar()}

      {/** Buttons */}
      {renderButton()}

      {/** Market List */}
      {renderList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  headerTitle: {
    color: COLORS.white,
    fontFamily: FONT.extrabold,
    fontSize: heightPercentageToDP(3),
  },
});

export default Market;
