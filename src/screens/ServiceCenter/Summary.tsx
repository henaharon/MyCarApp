/* eslint-disable*/
import { useContext, useState } from 'react';
import {
    Image,
    ImageSourcePropType,
    Modal,
    Pressable,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
    ViewProps,
} from 'react-native';
import { Text } from 'react-native';
import { Spacer } from './ui/Spacer';
import { ImagesView } from './ui/AddImages';
import { BlackWrapper } from './ui/BlackWrapper';
import { GradientButton } from './ui/GradientButton';
import { ServiceContext } from './store/context';
import { Bold } from './ui/Bold';
import { DefaultText } from './ui/DefaultText';
import { SubText } from './ui/SubText';
import { navigate } from './utils/navigator';

function Requirement({ description = '', name = "", src = "" as ImageSourcePropType }) {
    return (
        <View style={styles.mainView}>
            <Image source={src as ImageSourcePropType} style={styles.requirmentImage} />
            <View style={styles.subView}>
                <Text>{name}</Text>
                {description && <SubText>{description}</SubText>}
            </View>
        </View>
    );
}

function Detail({ description = "", title = "", src = "" as ImageSourcePropType }) {
    return (
        <View style={styles.detailContainer}>
            <View style={styles.imageContainer}>
                <Image source={src as ImageSourcePropType} style={styles.detailImage} />
            </View>
            <View style={styles.textContainer}>
                <Text>{title}</Text>
                {description && <SubText>{description}</SubText>}
            </View>
        </View>
    );
}

function dayType(date: Date) {
    return ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'][
        date.getDay()
    ];
}

function formatDate(date: Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [day, month, year].join('.');
}

export function Summary() {
    const [service, setService] = useContext(ServiceContext);
    const [success, setSuccess] = useState(false);
    return (
        <BlackWrapper
            onPrev={() => navigate('AdditionalDemands')}
            title={'סיכום קריאה'}>
            <View style={styles.summaryContainer}>
                <Bold>זימון שירותי מוסך</Bold>
                <SubText style={styles.subTextTopSpacing}>
                    לפניך פרטי הקריאה אנא בדוק שכל הפרטים נכונים לפני שליחה.
                </SubText>
                <View style={styles.serviceRow}>
                    <Image source={service.serviceType.src} style={styles.serviceImage} />
                    <Text style={styles.serviceText}>
                        {service.serviceType.id === 2
                            ? service.serviceType.name
                            : `טיפול ב${service.serviceType.name}`}
                    </Text>
                </View>
                {service.explanation && (
                    <View>
                        <Bold style={styles.descriptionHeader}>תיאור / הערות</Bold>
                        <SubText>{service.explanation}</SubText>
                    </View>
                )}

                {service.serviceImages.length ? (
                    <ImagesView
                        style={styles.imageSectionSpacing}
                        images={service.serviceImages}
                    />
                ) : (
                    <View></View>
                )}
                <Spacer />
                {service.additionalDemands && (
                    <View>
                        <Bold>דרישות נוספות</Bold>
                        <View style={{ gap: 16 }}>
                            {service.additionalDemands.map((demand, index) => {
                                return <Requirement key={demand.id} {...demand} />;
                            })}
                        </View>
                    </View>
                )}
                {service.otherDemands && (
                    <View style={styles.additionalDemandSection}>
                        <Requirement
                            name={'אחר'}
                            src={require('../assets/service-center/other.png')}
                            description={service.otherDemands}
                        />
                    </View>
                )}
                {service.additionalImages.length ? (
                    <ImagesView
                        style={styles.imageSectionSpacing}
                        images={service.additionalImages}
                    />
                ) : (
                    <View></View>
                )}
                <Spacer />
                <Bold>פרטים כללים</Bold>
                <View style={styles.detailsSection}>
                    <Detail
                        title="Hyundai IONIQ"
                        src={require('../assets/service-center/car.png')}
                        description={'23 441 32'}
                    />
                    <Detail
                        title="נקודות איסוף והחזרה"
                        src={require('../assets/service-center/car.png')}
                        description={service.location}
                    />
                    <Detail
                        title="מועד טיפול"
                        src={require('../assets/service-center/car.png')}
                        description={`יום ${dayType(service.date)} ${formatDate(
                            service.date,
                        )}`}
                    />
                </View>
                <View style={styles.infoBanner}>
                    <View style={styles.infoIconContainer}>
                        <Image
                            source={require('../assets/service-center/info.png')}
                            style={styles.infoIcon}
                        />
                    </View>
                    <View style={styles.notification}>
                        <Bold>לידיעך</Bold>
                        <Text style={styles.reminderText}>
                            יום לפני המועד המבוקש תשלח הודעת תזכורת למכשירך.
                        </Text>
                    </View>
                </View>
                <GradientButton
                    onPress={() => setSuccess(true)}
                    style={styles.imageSectionSpacing}
                    title="אישור ושליחה"
                />
                {success && (
                    <Modal
                        transparent={true}
                        visible={success}
                        onRequestClose={() => {
                            setSuccess(false);
                        }}>
                        <TouchableWithoutFeedback onPress={() => setSuccess(false)}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Bold>תודה</Bold>
                                    <DefaultText style={styles.descriptionHeader}>
                                        קריאה נשלחה בהצלחה
                                    </DefaultText>
                                    <GradientButton
                                        style={{ marginTop: 20, width: 220 }}
                                        title="צפייה בסטטוס הקריאה"
                                        onPress={() => navigate('Home')}
                                    />
                                    <DefaultText
                                        style={{ color: '#7b8cf6', marginTop: 12 }}
                                        onPress={() => navigate('Home')}>
                                        אישור
                                    </DefaultText>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                )}
            </View>
        </BlackWrapper>
    );
}

const styles = StyleSheet.create({
    notification: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalView: {
        height: 200,
        width: '90%',
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    mainView: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        gap: 8,
    },
    requirmentImage: {
        width: 60,
        height: 60,
    },
    subView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        gap: 12,
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 60 / 2,
        width: 60,
        height: 60,
        backgroundColor: '#f6e8e8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailImage: {
        width: 30,
        height: 30,
    },
    textContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    summaryContainer: {
        width: '100%',
        paddingBottom: 60,
    },
    subTextTopSpacing: {
        marginTop: 4,
    },
    serviceRow: {
        gap: 16,
        marginTop: 20,
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    serviceImage: {
        width: 40,
        height: 40,
    },
    descriptionHeader: {
        marginTop: 12,
        fontSize: 14,
    },
    imageSectionSpacing: {
        marginTop: 20,
    },
    additionalDemandSection: {
        marginTop: 16,
    },
    detailsSection: {
        marginTop: 12,
        gap: 12,
    },
    infoBanner: {
        flexDirection: 'row-reverse',
        gap: 10,
        backgroundColor: '#fff9e6',
        paddingRight: 6,
        paddingTop: 8,
        paddingLeft: 20,
        paddingBottom: 12,
        marginTop: 20,
        borderRadius: 16,
    },
    infoIconContainer: {
        borderRadius: 50 / 2,
        width: 50,
        height: 50,
        backgroundColor: '#fec400',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoIcon: {
        width: 20,
        height: 20,
    },
    serviceText: {
        fontWeight: '500',
    },
    reminderText: {
        width: 200,
        fontSize: 13,
    },
});
