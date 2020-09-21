import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


interface ContainerProps {
    test: string
}

const Historial: React.FC<ContainerProps> = ({ test }: ContainerProps) => {
    return (
        <IonPage >
            <IonHeader >
                <IonToolbar color="medium">
                    <IonTitle>Historial</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large"></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <HistorialContenido />
            </IonContent>
        </IonPage>
    );
};

const HistorialContenido: React.FC = () => {

    return (
        <div className="container">

        </div>
    );
}

export default Historial;