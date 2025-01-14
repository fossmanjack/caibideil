// PRAYERS.js
// Provides the initial prayer set to be loaded into Redux state
// Will be overwritten the first time the app is opened
// jsp/P3Soft
// 2022-12-08

export const PRAYERS = {
	en: {
		orthodox: {
			niceneCreed_en_orth: {
				title: 'Nicene Creed',
				body: 'I believe in one God, Father Almighty, maker of Heaven and Earth, and of all things visible and invisible.\n\nAnd in one Lord Jesus Christ, the only-begotten Son of God, begotten of the Father before all ages; Light of Light, true God of true God, begotten, not created, of one essence with the Father, through Whom all things were made, who for us men and for our salvation came down from Heaven, and was incarnate of the Holy Spirit and the Theotokos, and became man.  He was crucified for us under Pontius Pilate, and suffered, and was buried; and He rose on the third day according to the Scriptures.  He ascended into Heaven and is seated at the right hand of the Father, and He will come again with glory to judge the living and the dead.  His kingdom shall have no end.\n\nAnd in the Holy Spirit, the Lord, Creator of Life, Who proceeds from the Father, Who, together with the Father and the Son, is worshipped and glorified, Who spoke through the prophets.\n\nI believe in one holy, catholic, and apostolic Church.\n\nI confess one baptism for the forgiveness of sins.\n\nI look for the resurrection of the dead and the life of the age to come.',
				tags: [
					'Daily Prayers',
					'Symbol'
				],
			},
			lordsPrayer_en_orth: {
				title: 'The Lord\'s Prayer',
				body: 'Our Father, who art in Heaven, hallowed be thy name.  Thy kingdom come, Thy will be done, on Earth as it is in Heaven.  Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us.  Lead us not into temptation, but deliver us from the Evil One, for thine is the kingdom, and the power, and the glory, forever and ever and unto the ages of ages.',
				tags: [
					'Daily Prayers',
					'Lord\'s Prayer'
				],
			},
		},
		catholic: {

		},
		protestant: {

		},
		universal: {
			jesusPrayer_en_univ: {
				title: 'The Jesus Prayer',
				body: 'Lord Jesus Christ, Son of God, have mercy on me, a sinner.',
				tags: [
					'Daily Prayers',
					'Jesus Prayer',
				],
			},

		},
	},
	el: {
		universal: {
			jesusPrayer_el_univ: {
				title: 'Η προσευχή του Ιησού',
				body: 'Κύριε Ιησού Χριστέ, υιέ του Θεού, ελέησόν με τον αμαρτωλό.',
				tags: [
					'Daily Prayers',
					'Jesus Prayer',
					'Greek'
				],
			},

		},
	},
	eo: {
		universal: {
			jesusPrayer_eo_univ: {
				title: 'La Preĝo de Jesuo',
				body: 'Sinjoro Jesuo Kristo, filo de Dio, kompatu min, pekulo.',
				tags: [
					'Daily Prayers',
					'Jesus Prayer',
					'Esperanto'
				]
			},

		},
	},
	ga: {
		universal: {
			jesusPrayer_ga_univ: {
				title: 'An Phaidir Íosa',
				body: 'A Thiarna Íosa Críost, a Mhic Dé, déan trócaire orm, a pheacach.',
				tags: [
					'Daily Prayers',
					'Jesus Prayer',
					'Irish'
				]
			},
		},
	},
}

/* NOTES

PRAYERS = {
	lang: {
		denomination: {
			prayerID: {
				title,
				body,
				tags
			}
		}
	}
}

Prayers have a unique ID used to index them.  Each contains a title, a body,
and a series of tags.  The specific set of prayers loaded depends on the user's
language and denomination settings.  Right now it's just in English.

*/
