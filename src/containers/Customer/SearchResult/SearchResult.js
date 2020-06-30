import React, { Component } from 'react'
import './SearchResult.css'
import { dom } from '@fortawesome/fontawesome-svg-core';
export default class SearchResult extends Component {

    render() {
        let departments = [
            {
                "id": 1,
                "name": "Điện thoại",
                "photo": "fas fa-mobile-alt",
                "parrent_id": null,
                "children_categories": [
                    {
                        "id": 14,
                        "name": "Samsung",
                        "photo": "fas fa-mobile-alt",
                        "parrent_id": 1,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 22,
                                "name": "Samsung A",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 14,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 23,
                                "name": "Samsung J",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 14,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 24,
                                "name": "Samsung S",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 14,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 25,
                                "name": "Samsung Note",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 14,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    },
                    {
                        "id": 15,
                        "name": "Iphone",
                        "photo": "fas fa-mobile-alt",
                        "parrent_id": 1,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 26,
                                "name": "Iphone X",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 15,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 27,
                                "name": "Iphone 8",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 15,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 28,
                                "name": "Iphone 7",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 15,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 29,
                                "name": "Iphone 6",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 15,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 30,
                                "name": "Iphone 5",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 15,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 31,
                                "name": "Iphone 4",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 15,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    },
                    {
                        "id": 16,
                        "name": "Asus",
                        "photo": "fas fa-mobile-alt",
                        "parrent_id": 1,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 32,
                                "name": "Asus 4",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 16,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 33,
                                "name": "Asus 3",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 16,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 34,
                                "name": "Asus 2",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 16,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 35,
                                "name": "Asus 1",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 16,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    },
                    {
                        "id": 17,
                        "name": "Nokia",
                        "photo": "fas fa-mobile-alt",
                        "parrent_id": 1,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 36,
                                "name": "Nokia Lumia 1020",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 17,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 37,
                                "name": "Nokia Lumia 930",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 17,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 38,
                                "name": "Nokia Lumia 630",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 17,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 39,
                                "name": "Nokia 1080",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 17,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    },
                    {
                        "id": 18,
                        "name": "Xiaomi",
                        "photo": "fas fa-mobile-alt",
                        "parrent_id": 1,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 40,
                                "name": "Xiaomi Redmi",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 18,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 41,
                                "name": "Xiaomi Redmi Note",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 18,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 42,
                                "name": "Xiaomi MI",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 18,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    },
                    {
                        "id": 19,
                        "name": "Oppo",
                        "photo": "fas fa-mobile-alt",
                        "parrent_id": 1,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": []
                    },
                    {
                        "id": 20,
                        "name": "LG",
                        "photo": "fas fa-mobile-alt",
                        "parrent_id": 1,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": []
                    },
                    {
                        "id": 21,
                        "name": "Sony",
                        "photo": "fas fa-mobile-alt",
                        "parrent_id": 1,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 43,
                                "name": "Sony Xperia",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 21,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "name": "Điện gia dụng",
                "photo": "fas fa-tv",
                "parrent_id": null,
                "children_categories": [
                    {
                        "id": 9,
                        "name": "Bếp ga",
                        "photo": "fa fa-mobile",
                        "parrent_id": 2,
                        "created_at": "2020-05-29 10:26:36",
                        "updated_at": "2020-05-29 10:26:36",
                        "categories": []
                    },
                    {
                        "id": 10,
                        "name": "Bếp điện",
                        "photo": "fa fa-mobile",
                        "parrent_id": 2,
                        "created_at": "2020-05-29 10:26:36",
                        "updated_at": "2020-05-29 10:26:36",
                        "categories": []
                    },
                    {
                        "id": 11,
                        "name": "Nồi cơm điện",
                        "photo": "fa fa-mobile",
                        "parrent_id": 2,
                        "created_at": "2020-05-29 10:26:36",
                        "updated_at": "2020-05-29 10:26:36",
                        "categories": []
                    },
                    {
                        "id": 12,
                        "name": "Máy lọc nước",
                        "photo": "fa fa-mobile",
                        "parrent_id": 2,
                        "created_at": "2020-05-29 10:26:36",
                        "updated_at": "2020-05-29 10:26:36",
                        "categories": []
                    },
                    {
                        "id": 13,
                        "name": "Quạt điện",
                        "photo": "fa fa-mobile",
                        "parrent_id": 2,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 44,
                                "name": "Quạt Điện Media",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 13,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 45,
                                "name": "Quạt Điện Panasonic",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 13,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 46,
                                "name": "Quạt Điện Mitsubishi",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 13,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 47,
                                "name": "Quạt Điện Asia",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 13,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 48,
                                "name": "Quạt Điện Komasu",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 13,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 49,
                                "name": "Quạt Điện Sunhouse",
                                "photo": "fas fa-mobile-alt",
                                "parrent_id": 13,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 50,
                                "name": "Quat dien Samsung",
                                "photo": "far fa-trash",
                                "parrent_id": 13,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 3,
                "name": "Điện lạnh",
                "photo": "fas fa-blender",
                "parrent_id": null,
                "children_categories": [
                    {
                        "id": 51,
                        "name": "Điều hòa, máy lạnh",
                        "photo": "far fa-trash",
                        "parrent_id": 3,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 54,
                                "name": "Điều hòa Panasonic",
                                "photo": "far fa-trash",
                                "parrent_id": 51,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 55,
                                "name": "Điều hòa Samsung",
                                "photo": "far fa-trash",
                                "parrent_id": 51,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    },
                    {
                        "id": 52,
                        "name": "Tủ lạnh",
                        "photo": "far fa-trash",
                        "parrent_id": 3,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 56,
                                "name": "Tủ lạnh Samsung",
                                "photo": "far fa-trash",
                                "parrent_id": 52,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 57,
                                "name": "Tủ lạnh Hatachi",
                                "photo": "far fa-trash",
                                "parrent_id": 52,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 63,
                                "name": "Tủ lạnh BeKo",
                                "photo": "far fa-trash",
                                "parrent_id": 52,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 64,
                                "name": "Tủ lạnh LG",
                                "photo": "far fa-trash",
                                "parrent_id": 52,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    },
                    {
                        "id": 53,
                        "name": "Máy giặt",
                        "photo": "far fa-trash",
                        "parrent_id": 3,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 65,
                                "name": "Máy giặt BeKo",
                                "photo": "far fa-trash",
                                "parrent_id": 53,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 66,
                                "name": "Máy giặt SamSung",
                                "photo": "far fa-trash",
                                "parrent_id": 53,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 67,
                                "name": "Máy giặt Aqua",
                                "photo": "far fa-trash",
                                "parrent_id": 53,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 4,
                "name": "Kỹ thuật số",
                "photo": "fa fa-camera-retro",
                "parrent_id": null,
                "children_categories": [
                    {
                        "id": 58,
                        "name": "Máy ảnh DSRL",
                        "photo": "far fa-trash",
                        "parrent_id": 4,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": []
                    },
                    {
                        "id": 59,
                        "name": "Máy ảnh thường",
                        "photo": "far fa-trash",
                        "parrent_id": 4,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": []
                    },
                    {
                        "id": 60,
                        "name": "Tivi",
                        "photo": "far fa-trash",
                        "parrent_id": 4,
                        "created_at": "2020-05-29 10:26:37",
                        "updated_at": "2020-05-29 10:26:37",
                        "categories": [
                            {
                                "id": 61,
                                "name": "Tivi Samsung",
                                "photo": "far fa-trash",
                                "parrent_id": 60,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 62,
                                "name": "Tivi Panasonic",
                                "photo": "far fa-trash",
                                "parrent_id": 60,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            },
                            {
                                "id": 68,
                                "name": "Tivi LG",
                                "photo": "far fa-trash",
                                "parrent_id": 60,
                                "created_at": "2020-05-29 10:26:37",
                                "updated_at": "2020-05-29 10:26:37"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 5,
                "name": "Laptop",
                "photo": "fa fa-laptop",
                "parrent_id": null,
                "children_categories": []
            },
            {
                "id": 6,
                "name": "Thiết bị văn phòng",
                "photo": "fas fa-book",
                "parrent_id": null,
                "children_categories": []
            },
            {
                "id": 7,
                "name": "Tai nghe",
                "photo": "fas fa-headphones",
                "parrent_id": null,
                "children_categories": []
            },
            {
                "id": 8,
                "name": "Phụ kiện",
                "photo": "far fa-keyboard",
                "parrent_id": null,
                "children_categories": []
            }
        ];
        return (
            <div className='container add_border'>
                <div className='row'>
                    <div className='col-lg-3 col-md-5'>
                        <div className='sidebar'>
                            <div class="sidebar__item departments">
                                <h4>Department</h4>
                                <ul>
                                    {
                                        departments.map(dpm => {
                                            return (
                                                <li key={dpm.id}>
                                                    <input type='radio' id={dpm.id} value={dpm.name} name='department' checked={dpm.id == '1' ? true : false} />
                                                    <label for={dpm.id}>{dpm.name}</label>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <div class="sidebar__item">
                                <h4>Producer</h4>
                                <ul>
                                    <li><input type='radio' value='' name='price' checked /><label>Samsung</label></li>
                                    <li><input type='radio' value='' name='price' /><label>Apple</label></li>
                                    <li><input type='radio' value='' name='price' /><label>Oppo</label></li>
                                    <li><input type='radio' value='' name='price' /><label>Huwaei</label></li>
                                </ul>
                            </div>
                            <div class="sidebar__item">
                                <h4>Price</h4>
                                <ul>
                                    <li><input type='radio' value='' name='price' checked /><label>Dưới 3 triệu</label></li>
                                    <li><input type='radio' value='' name='price' /><label>Dưới 3 triệu</label></li>
                                    <li><input type='radio' value='' name='price' /><label>Dưới 3 triệu</label></li>
                                    <li><input type='radio' value='' name='price' /><label>Dưới 3 triệu</label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-7'>
                        <div className="filter__item">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="filter__sort">
                                        <span>Sort By</span>
                                        <select>
                                            <option value="0">Default</option>
                                            <option value="0">Default</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4">
                                    <div class="filter__found">
                                        <h6><span>16</span> Products found</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
