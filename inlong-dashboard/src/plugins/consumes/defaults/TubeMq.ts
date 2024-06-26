/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { DataWithBackend } from '@/plugins/DataWithBackend';
import { RenderRow } from '@/plugins/RenderRow';
import { RenderList } from '@/plugins/RenderList';
import i18n from '@/i18n';
import { ConsumeInfo } from '../common/ConsumeInfo';

const { I18n } = DataWithBackend;
const { FieldDecorator } = RenderRow;

export default class TubeMqConsume
  extends ConsumeInfo
  implements DataWithBackend, RenderRow, RenderList
{
  @FieldDecorator({
    type: 'radio',
    initialValue: 0,
    props: {
      options: [
        {
          label: i18n.t('meta.Consume.Yes'),
          value: 1,
        },
        {
          label: i18n.t('meta.Consume.No'),
          value: 0,
        },
      ],
    },
    rules: [{ required: true }],
  })
  @I18n('meta.Consume.FilterEnabled')
  filterEnabled: 0 | 1;

  @FieldDecorator({
    type: 'input',
    rules: [{ required: true }],
    visible: values => values.filterEnabled,
  })
  @I18n('meta.Consume.TargetInlongStreamID')
  inlongStreamId: string;
}
