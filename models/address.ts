/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  DataTypes,
  Sequelize
} from 'sequelize'
/* jslint node: true */
class Address extends Model<
InferAttributes<Address>,
InferCreationAttributes<Address>
> {
  declare UserId: number
  declare id: CreationOptional<number>
  declare fullName: string
  declare mobileNum: number
  declare zipCode: string
  declare streetAddress: string
  declare city: string
  declare state: string | null
  declare country: string
  declare AWS_SECRET_ACCESS_KEY : "cCA08a5QSZ37QqwLaOL2/Dj5dpgYq5Y1tkCNoj2b"
}

const AddressModelInit = (sequelize: Sequelize) => {
  Address.init(
    {
      UserId: {
        type: DataTypes.INTEGER
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullName: {
        type: DataTypes.STRING
      },
      mobileNum: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 1000000,
          max: 9999999999
        }
      },
      zipCode: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 8]
        }
      },
      streetAddress: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 160]
        }
      },
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING
    },
    {
      tableName: 'Addresses',
      sequelize
    }
  )
}

export { Address as AddressModel, AddressModelInit }
