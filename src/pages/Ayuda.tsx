import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


interface ContainerProps {
    test: string
}

const Ayuda: React.FC<ContainerProps> = ({ test }: ContainerProps) => {
    return (
        <IonPage >
            <IonHeader >
                <IonToolbar color="medium">
                    <IonTitle>Ayuda</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large"></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <AyudaContenido />
            </IonContent>
        </IonPage>
    );
};

const AyudaContenido: React.FC = () => {

    return (
        <div className="container">

        </div>
    );
}

export default Ayuda;