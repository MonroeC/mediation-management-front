<script lang="ts" setup>
import type { FormInstance } from 'ant-design-vue';
import { Form, Row, Col,Button, Input, Table, Select, Radio  } from 'ant-design-vue';
import { reactive, ref } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import {CASE_STATUS} from './constants'
const expand = ref(false);
const formRef = ref<FormInstance>();

const formState = reactive({
  name: '',
  status: 'all',
});
const onFinish = (values: any) => {
  console.log('Received values of form:', values);
  console.log('formState:', formState);
};
</script>
<template>
  <div class="page">
    <Form
      ref="formRef"
      :model="formState"
      class="ant-advanced-search-form"
      @finish="onFinish"
    >
      <Row :gutter="24">
        <Col :span="7">
          <Form.Item
            :name="name"
          >
            <Input.Search
              v-model:value="formState[`name`]"
              placeholder="请输入案件名称、编号搜索"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col :span="7">
          <Form.Item
            :name="type"
          >
            <Select
              v-model:value="formState[`type`]"
              placeholder="请输入案件名称、编号搜索"
            />
          </Form.Item>
        </Col>
        <Col :span="10">
          <Form.Item
            :name="status"
          >
          <Radio.Group v-model:value="formState[`status`]">
            <Radio.Button v-for="item in CASE_STATUS" :value="item.value">
              {{ item.label }}
            </Radio.Button>
          </Radio.Group>
          </Form.Item>
        </Col>
        <!-- <template v-for="i in 10" :key="i">
          <Col v-show="expand || i <= 8" :span="6">
            <Form.Item
              :name="`field-${i}`"
              :rules="[{ required: true, message: 'input something' }]"
            >
              <Input
                v-model:value="formState[`field-${i}`]"
                placeholder="placeholder"
              />
            </Form.Item>
          </Col>
        </template> -->
      </Row>
      <Row v-show="expand">
          <Col :span="8">
          <Form.Item
            :name="type"
            label="案件类型"
          >
            <Select
              v-model:value="formState[`type`]"
              placeholder="请选择"
            />
          </Form.Item>
        </Col>
        <Col :span="8">
          <Form.Item
            :name="type"
            label="委案方"
          >
            <Select
              v-model:value="formState[`type`]"
              placeholder="请选择"
            />
          </Form.Item>
        </Col>
        <Col :span="8">
          <Form.Item
            :name="type"
            label="调解员"
          >
            <Select
              v-model:value="formState[`type`]"
              placeholder="请选择"
            />
          </Form.Item>
        </Col>
        <Col :span="8">
          <Form.Item
            :name="type"
            label="负责人"
          >
            <Select
              v-model:value="formState[`type`]"
              placeholder="请选择"
            />
          </Form.Item>
        </Col>
        <Col :span="8">
          <Form.Item
            :name="type"
            label="标签"
          >
            <Select
              v-model:value="formState[`type`]"
              placeholder="请选择"
            />
          </Form.Item>
        </Col>
        <Col :span="8">
          <Form.Item
            :name="type"
            label="当事人"
          >
            <Select
              v-model:value="formState[`type`]"
              placeholder="请选择"
            />
          </Form.Item>
        </Col>
        </Row>
      <Row>
        <Col :span="24" style="text-align: right">
          <Button html-type="submit" type="primary">搜索</Button>
          <Button style="margin: 0 8px" @click="() => formRef.resetFields()">
            重置
          </Button>
          <a style="font-size: 12px" @click="expand = !expand">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            {{ expand ? '收起' : '展开' }}
          </a>
        </Col>
      </Row>
    </Form>
    <div class="search-result-list">
      <Table :columns="columns" :data-source="data" />
    </div>
  </div>
</template>
<style scoped>
.page {
  margin: 16px;
  background-color: #fff;
  padding: 16px;
}
#components-form-demo-advanced-search .ant-form {
  max-width: none;
}

#components-form-demo-advanced-search .search-result-list {
  min-height: 200px;
  padding-top: 80px;
  margin-top: 16px;
  text-align: center;
  background-color: #fafafa;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
}

[data-theme='dark'] .ant-advanced-search-form {
  padding: 24px;
  background: rgb(255 255 255 / 4%);
  border: 1px solid #434343;
  border-radius: 2px;
}

[data-theme='dark'] #components-form-demo-advanced-search .search-result-list {
  background: rgb(255 255 255 / 4%);
  border: 1px dashed #434343;
}
</style>
