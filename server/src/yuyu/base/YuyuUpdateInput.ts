/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutYuyusInput } from "./UserUpdateManyWithoutYuyusInput";
import { Type } from "class-transformer";

@InputType()
class YuyuUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tedt?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutYuyusInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutYuyusInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutYuyusInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutYuyusInput;
}

export { YuyuUpdateInput as YuyuUpdateInput };