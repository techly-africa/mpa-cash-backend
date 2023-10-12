import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

@Schema({ timestamps: true })
export class Role {
  @Prop()
  @IsNotEmpty()
  roleName: string;

  @Prop()
  description: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Permission' }] // Define the reference to 'Permissions' model
  })
  permissions: Types.ObjectId[];
}

export const roleSchema = SchemaFactory.createForClass(Role);
