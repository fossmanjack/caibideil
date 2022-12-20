import { Dialog, FAB, SpeedDial } from '@rneui/themed';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as Prayer from '../slices/prayerSlice';

export default function SpeedDialOverlay() {
	const [ prayerModal, showPrayerModal ] = useState(false);
	const [ prayerText, setPrayerText ] = useState('');
	const [ speedDialOpen, setSpeedDialOpen ] = useState(false);
	const dispatch = useDispatch();

	const handleSubmitPrayer = _ => {
		console.log(prayerText);
		dispatch(Prayer.addPrayer({
			id: Date.now().toString(16),
			title: 'Prayer',
			text: prayerText,
			expiry: 0,
		}));

		setPrayerText('');
		showPrayerModal(false);
	}

	return (

		<>
			<SpeedDial
				isOpen={speedDialOpen}
				icon={{
					name: 'add',
					type: 'material',
					color: 'white'
				}}
				openIcon={{
					name: 'minus',
					type: 'material-community',
					color: 'white'
				}}
				onOpen={_ => setSpeedDialOpen(!speedDialOpen)}
				onClose={_ => setSpeedDialOpen(!speedDialOpen)}
				placement='right'
				size='large'
				labelPressable={true}
				style={{
					marginBottom: 50,
				}}
			>
				<SpeedDial.Action
					icon={{
						name: 'playlist-add',
						type: 'material',
						color: 'white'
					}}
					title='Add prayer'
					onPress={_ => {
						setSpeedDialOpen(!speedDialOpen);
						showPrayerModal(!prayerModal);
					}}
				/>
				<SpeedDial.Action
					icon={{
						name: 'add-alert',
						type: 'material',
						color: 'white'
					}}
					title='Add reminder'
					onPress={_ => {}}
				/>
			</SpeedDial>

			<Dialog
				isVisible={prayerModal}
				onBackdropPress={_ => showPrayerModal(false)}
			>
				<Dialog.Title title='Enter Prayer' />
				<TextInput
					multiline={true}
					numberOfLines={4}
					placeholder='Pray for ...'
					value={prayerText}
					onChangeText={text => setPrayerText(text)}
					style={{
						padding: 10,
						borderWidth: 1,
					}}
				/>
				<Dialog.Actions>
					<Dialog.Button
						title='Pray!'
						onPress={handleSubmitPrayer}
					/>
					<Dialog.Button
						title='Cancel'
						onPress={_ => {
							setPrayerText('');
							showPrayerModal(false);
						}}
					/>
				</Dialog.Actions>
			</Dialog>
		</>
	);
}
